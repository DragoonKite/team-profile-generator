const Manager = require('../lib/Manager')

test('creates a Manager object', () =>{
    const manager = new Manager('Fred', 1, 'fred@email.com', 10);

    expect(manager.name).toBe('Fred')
    expect(manager.id).toBe(1);
    expect(manager.email).toBe('fred@email.com');
    expect(manager.officenumber).toBe(10);
})

test('checks if the Manager role is returned', () =>{
    const manager = new Manager('Fred', 1, 'fred@email.com', 10);

    expect(manager.getRole()).toBe('Manager')
});

test('checks to make sure officenumber is returned correctly', () =>{
    const manager = new Manager('Fred', 1, 'fred@email.com', 10);

    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});