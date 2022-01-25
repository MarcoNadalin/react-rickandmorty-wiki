import React from 'react';
import { Box, Card } from 'bumbag';

export default function CharacterCard(props) {
    return (
        <Card title={"Name: " + props.title}>
            this is some other text in the title
        </Card>
    );
}
