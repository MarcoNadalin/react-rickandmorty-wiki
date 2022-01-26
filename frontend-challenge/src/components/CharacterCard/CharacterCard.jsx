import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Card, CardContent, CardHeader, Heading } from 'bumbag';

export default function CharacterCard(props) {
    return (
        <Card height="200px">
            <Link to={{
                pathname: '/character',
                search: '?id='+props.id
            }}>
                <CardHeader>
                    <Heading use="h6"> {props.title} </Heading>
                </CardHeader>
            </Link>

            <CardContent>
                other card content
            </CardContent>
        </Card>
    );
}
