import React from 'react';
import { Button, DateInput, util } from 'react-lightning-design-system';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Button type="brand">foo</Button>
        <DateInput label='DateInput #1' defaultValue='2015-12-24' defaultOpened required />
      </div>
    );
  }
}
