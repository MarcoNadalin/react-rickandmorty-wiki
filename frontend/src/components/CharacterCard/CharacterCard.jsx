import React from 'react';
//import { Link } from 'react-router-dom';

import { Box, Card, CardContent, CardHeader, Heading, Group, Image, Text, List, Link} from 'bumbag';

export default function CharacterCard(props) {
    console.log(props)
    return (
        <Group orientation="horizontal">
            <Card height="200px" backgroundColor="secondary">
                <Image src={props.image} alt={props.title+"_image"} fit="contain" height="150px" width="150px"/>
            </Card>
            <Card height="200px" width="100%" backgroundColor="secondary">
                
                <CardHeader>
                    <Link.Block href={"/character?id="+props.id} focus="title_hover">
                        <Link> {props.title} </Link>
                    </Link.Block>
                    
                </CardHeader>

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
