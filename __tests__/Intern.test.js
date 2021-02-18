const Intern = require('../lib/Intern')

test('creates an Intern object', () =>{
    const intern = new Intern('Fred', 1, 'fred@email.com', 'school');

    expect(intern.name).toBe('Fred')
    expect(intern.id).toBe(1);
    expect(intern.email).toBe('fred@email.com');
    expect(intern.school).toBe('school');
})

test('checks if the Intern role is returned', () =>{
    const intern = new Intern('Fred', 1, 'fred@email.com', 'school');

    expect(intern.getRole()).toBe('Intern')
});

test('checks to make sure school is returned correctly', () =>{
    const intern = new Intern('Fred', 1, 'fred@email.com', 'school');

    expect(intern.getSchool()).toBe('school');
});