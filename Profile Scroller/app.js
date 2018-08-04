const data = [
    {
        name: 'John Doe',
        age: 40,
        gender: 'Male',
        lookingfor: 'Female',
        location: 'Orlando, FL',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: 'Jen Smith',
        age: 26,
        gender: 'Woman',
        lookingfor: 'Male',
        location: 'Miami, FL',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name: 'William Johnson',
        age: 35,
        gender: 'Male',
        lookingfor: 'Female',
        location: 'New York, NY',
        image: 'https://randomuser.me/api/portraits/men/83.jpg'
    }
];

const profiles = profileIterator(data);

//Call first profile
nextProfile();

//Next event
document.getElementById('next').addEventListener('click', nextProfile);


function nextProfile(){
    const currentProfile = profiles.next().value;

    if(currentProfile !== undefined){
        document.getElementById('profileDisplay').innerHTML = `
            <ul class="list-group">
                <li class="list-group-item">Name: ${currentProfile.name}</li>
                <li class="list-group-item">Age: ${currentProfile.age}</li>
                <li class="list-group-item">Location: ${currentProfile.location}</li>
                <li class="list-group-item">Gender: ${currentProfile.gender}</li>
                <li class="list-group-item">Looking For: ${currentProfile.lookingfor}</li>
            <ul>
        `;

    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
    }
    else{
        window.location.reload();
    }
}

//* Profile Iterator
function profileIterator(profiles){
    let nextIndex = 0;

    return {
        next: function(){
            return nextIndex < profiles.length ? 
            {value: profiles[nextIndex++], done: false} :
            {done: true}     
        }
    };
}

