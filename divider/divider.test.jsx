import React from 'react';
import DividerComponent from './divider';
import renderer from 'react-test-renderer';
jest.mock('./divider.css', () => jest.fn());

test('It should generate a div with the dividers', () => {
    const component = renderer.create(
        <DividerComponent/>
    );
    let tree = component.toJSON();
    expect(tree.type).toEqual('div');
    let left, right = false;
    tree.children.forEach(child => {
        if(child.props.className.includes('left')) left = true;
        if(child.props.className.includes('right')) right = true;
    });
    expect(right).toBe(true);
    expect(left).toBe(true);
});

test('It should open the dividers on .open()', async () => {
    let dividerComponent;
    const component = renderer.create(
        <DividerComponent ref={instance => dividerComponent = instance}/>
    );
    await dividerComponent.open();
    let tree = component.toJSON();
    expect(tree.props.className).toContain('open');
});

test('It should open the dividers on .close()', async () => {
    let dividerComponent;
    const component = renderer.create(
        <DividerComponent ref={instance => dividerComponent = instance}/>
    );
    await dividerComponent.open();
    let tree = component.toJSON();
    expect(tree.props.className).toContain('open');
    await dividerComponent.close();
    tree = component.toJSON();
    expect(tree.props.className).not.toContain('open');
});
