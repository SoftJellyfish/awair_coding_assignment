import React from 'react';
import axios from 'axios';

function MainPage() {

    const [events, setEvents] = React.useState([]);

    console.log('events: ', events);
    console.log('events length: ', events.length);

    React.useEffect(async () => {
            const getEvents = async () => {
                await axios.get('https://mobile-app-interview.awair.is/events')
                .then((response) => {
                    console.log('response:', response);
                    setEvents(response);
                })
                .catch((error) => {
                    console.log('error: ', error);
                });
            }
            if (events.length === 0) {
                getEvents();
            }
      }, [events]);

    return (
        <div>
            {
                events.length != 0 ? events.data.events.map((index) => {
                    return (
                        <div style={{ display: 'flex'}}>
                            <div>{index.title}</div>
                            <div>{index.start}</div>
                            <div>{index.end}</div>
                        </div>
                    );
                })
                :
                null
            }
        </div>
    );
}

export default MainPage;