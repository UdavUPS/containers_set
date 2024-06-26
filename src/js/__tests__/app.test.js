import Team from '../app';

test('methods test', () => {

    const team = new Team();
    team.add('Pesho');
    team.add('Vas');
    team.addAll('Pesho', 'Gosho', 'Stamat');
    
    const result = team.toArray();
    const forHceck = ['Pesho', 'Vas', 'Gosho', 'Stamat']
  
    expect(result).toEqual(forHceck);
  });