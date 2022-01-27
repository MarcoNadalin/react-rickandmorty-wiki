import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Card, CardContent, CardHeader, Heading, Group, Image, Text, List } from 'bumbag';

export default function CharacterCard(props) {
    console.log(props)
    return (
        <Group orientation="horizontal">
            <Card height="200px">
                <Image src={props.image} alt={props.title+"_image"} fit="contain" height="150px" width="150px"/>
            </Card>
            <Card height="200px" width="100%">
                <Link to={{
                    pathname: '/character',
                    search: '?id='+props.id
                }}>
                    <CardHeader>
                        <Heading use="h5"> {props.title} </Heading>
                    </CardHeader>
                </Link>

                <CardContent>
                    <List>   
                        <List.Item> 
                            <Text fontWeight="bold">Status</Text>
                            <Text> {props.status} </Text>
                        </List.Item>                 
                        
                        <List.Item>
                            <Text fontWeight="bold">Last seen Location</Text>   
                            <Text> {props.location.name} </Text>
                        </List.Item>
                    </List>
                </CardContent>
            </Card>
        </Group>
    );
}
