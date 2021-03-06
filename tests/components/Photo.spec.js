import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);
import Photo from '../../client/components/Photo';


describe('Photo Component', function () {
  var result;

  before(()=> {
    var renderer = ReactTestUtils.createRenderer();

    const props = [ {
      "id":"1225406230",
      "actor_username":"lolita.beier",
      "actor_description":"De-engineered optimizing attitude",
      "actor_name":"Matilda Breitenberg V",
      "actor_avator":"https://robohash.org/lolita.beier.png?size=300x300\u0026set=set1",
      "actor_url":"https://twitter.com/lolita.beier",
      "provider":"twitter",
      "activity_url":"https://twitter.com/lolita.beier/1225406230",
      "activity_latitude":null,
      "activity_longitude":null,
      "activity_date":"2017-02-22",
      "activity_message":"Vomer color adipisci sit coma vultuosus verecundia vulnero vae copiose stipes.",
      "activity_likes":41,
      "activity_shares":41,
      "activity_comments":4,
      "activity_attachment":null,
      "activity_attachment_type":null,
      "activity_sentiment":0
   }];

    renderer.render(<Photo post={props} i={0} />)
    result = renderer.getRenderOutput();
  });

  it('should return a figure element',()=>{
    expect(result.type).toEqual('figure');
  });

  it('should have three children',()=>{
    expect(result.props.children.length).toEqual(3);
  });

})
