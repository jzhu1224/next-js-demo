import React from 'react'
import styled from 'styled-components'

import { bitcon } from '../_axios';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`


function Index(props) {
    return (
        <div>
           <Title>current supported currencies:</Title>
           {props.trades.map(c => <div key={c}>{c}</div>)}
        </div>
    );
}

Index.getInitialProps = async () => {
    const res = await bitcon.trandes();
    console.log('res', res);
    return { trades: res.data };
};

export default Index;