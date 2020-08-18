import React from 'react';
import { shallow } from 'enzyme';

import PersonList from './PersonList';

describe('PersonList', () => {
  it('redners a ul element', () => {
    const personListWrapper = shallow(<PersonList />);
    const peopleListUls = personListWrapper.find('ul');

    expect(peopleListUls).toHaveLength(1);
  });

  it('renders no li elements when no people exist', () => {
    const people = [];
    const personListWrapper = shallow(<PersonList props={people}/>);
    const peopleListItems = personListWrapper.find('li');

    expect(peopleListItems).toHaveLength(0);
  });

  it ('renders one li element when one person exists', () => {
    const people = [{firstName: 'Jack', lastName: 'Sparrow'}];
    const personListWrapper = shallow(<PersonList people={people} />);
    const peopleListItems = personListWrapper.find('li');

    expect(peopleListItems).toHaveLength(1);
  });

  it ('renders an li element for each person in the list', () => {
    const people = [
      {firstName: 'Jack', lastName: 'Sparrow'}, 
      {firstName: 'Will', lastName: 'Turner'}
    ];
    const personListWrapper = shallow(<PersonList people={people} />);
    const peopleListItems = personListWrapper.find('li');

    expect(peopleListItems).toHaveLength(2);
  });

  it ('it renders the first and last name of a person', () => {
    const people = [
      {firstName: 'Jack', lastName: 'Sparrow'}
    ];
    const personListWrapper = shallow(<PersonList people={people} />);

    expect(personListWrapper.find('li').text()).toContain(people[0].firstName);
    expect(personListWrapper.find('li').text()).toContain(people[0].lastName);
  });

});