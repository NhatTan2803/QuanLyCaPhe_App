const  initDataprofile= () => (
    
    fetch(`http://localhost:1337/users/profile`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjJAZ21haWwuY29tIiwiaWF0IjoxNTI0OTM1NTg0fQ.FziyAFXLrgr_XkR0g62OOPyw5lM0OP7eWhmGRkkN5ag',
            },
        })
        .then(res => res.json())
        .catch(err => console.log('Lay du lieu bi loi'))
);

export default initDataprofile;