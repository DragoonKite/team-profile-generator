const Manager = require('../lib/Manager')

test('creates a Manager object', () =>{
    const manager = new Manager('Fred', 1, 'fred@email.com', 10);

    expect(manager.name).toBe('Fred')
    expect(manager.id).toBe(1);
    expect(manager.email).toBe('fred@email.com');
    expect(manager.officenumber).toBe(10);
})

test('checks that the Manager has a name', () =>{
    const manager = new Manager('Fred', 1, 'fred@email.com', 10);

    expect(manager.getName()).toEqual(expect.stringContaining(manager.name.toString()));
});

test('checks that the Manager has an id number', () =>{
    const manager = new Manager('Fred', 1, 'fred@email.com', 10);

    expect(manager.getID()).toEqual(expect.any(Number));
});

test('checks that the Managerhas an email address', () =>{
    const manager = new Manager('Fred', 1, 'fred@email.com', 10);

    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email.toString()));
});

test('checks if the Manager role is returned', () =>{
    const manager = new Manager('Fred', 1, 'fred@email.com', 10);

    expect(manager.getRole()).toBe('Manager')
});

test('checks to make sure officenumber is returned correctly', () =>{
    const manager = new Manager('Fred', 1, 'fred@email.com', 10);

    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});