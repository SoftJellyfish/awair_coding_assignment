import React from 'react';
import axios from 'axios';

function MainPage() {

    const [events, setEvents] = React.useState([]);


    React.useEffect(async () => {
            const getEvents = async () => {
                await axios.get('https://mobile-app-interview.awair.is/events')
                .then((response) => {
                    console.log('response:', response);
                    setEvents(response);
                    console.log('Events: ', events);
                })
                .catch((error) => {
                    console.log('error: ', error);
                });
            }
            if (events.length === 0) {
                getEvents();
            }
      }, [events]);
      console.log('events out: ', events);

    return (
        <div>
                <div style={{ display: 'flex'}}>
                    <div>{events.length > 0 ? events.data.events[0].title : 'fuck you'}</div>
                </div>
        </div>
    );
}

export default MainPage;