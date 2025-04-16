const getStudents = async () => {
    try {
        const response = await fetch('http://localhost:3005/api/student');
        const data = await response.json();

        const list = document.getElementById('student-list');

        data.forEach(student => {
            const li = document.createElement('li');
            li.textContent = `${student.first_name} ${student.last_name} - ${student.email} -${student.gender}`;
            list.appendChild(li);
        });
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}

getStudents();
