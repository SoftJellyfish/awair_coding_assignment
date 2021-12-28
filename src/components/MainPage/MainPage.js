import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { DataGrid } from '@mui/x-data-grid';


const TableContainer = styled.div`
    width: 100%;
    height: 500px;
`;

const LabelContainer = styled.div`
    width: 100%;
    display: flex;
`;

const Row = styled.div`
    width: 100%;
    display: flex;
`;

const Title = styled.div`
    width: 20%;
    margin: 20px;
`;
const Start = styled.div`
    width: 20%;
    margin: 20px;
`;
const End = styled.div`
    width: auto;
    margin: 20px;
`;

function MainPage() {

    const [events, setEvents] = React.useState([]);
    const [curPage, setCurPage] = React.useState(1);
    const [nextPageTok, setNextPageTok] = React.useState('');

    console.log('events: ', events);
    console.log('events length: ', events.length);

    const getEvents = async () => {
        await axios.get(`https://mobile-app-interview.awair.is/events`)
        .then((response) => {
            console.log('response:', response.data);
            setEvents(response.data.events);
            setNextPageTok(response.data.next_page_token);
        })
        .catch((error) => {
            console.log('error: ', error);
        });
    }

    const getNextPage = async () => {
        await axios.get(`https://mobile-app-interview.awair.is/events?next_page_token={${nextPageTok}}`)
        .then((response) => {
            console.log('response:', response.data);
            setEvents(response.data.events);
            setNextPageTok(response.data.next_page_token);
        })
        .catch((error) => {
            console.log('error: ', error);
        });
    }


    const columns = [
        { field: 'title', headerName: 'TITLE', width: 300 },
        { field: 'start', headerName: 'START', width: 300 },
        { field: 'end', headerName: 'END', width: 300 }
    ]

    React.useEffect(async () => {
            if (events.length === 0) {
                getEvents();
            }
      }, [events]);

    return (
        <>
            <TableContainer>
                <DataGrid
                    rows={events}
                    columns={columns}
                    getRowId={(events) => events.title}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    onPageChange={() => getNextPage()}
                    checkboxSelection
                />
                {/* <LabelContainer>
                    <Title style={{ fontWeight: 'bold'}}>TITLE</Title>
                    <Start style={{ fontWeight: 'bold'}}>START</Start>
                    <End style={{ fontWeight: 'bold'}}>END</End>
                </LabelContainer>
                {
                    events.length != 0 ? events.data.events.map((index) => {
                        return (
                            <>
                            <Row>
                                <Title>{index.title === '' ? 'NO TITLE' : index.title}</Title>
                                <Start>{index.start}</Start>
                                <End>{index.end}</End>
                            </Row>
                            </>
                        );
                    })
                    :
                    null
                } */}
            </TableContainer>

            </>
    );
}

export default MainPage;