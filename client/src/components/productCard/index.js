import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';

function ProductCard({product, classes}){
    return (    
        <Card className={classes.item}>
            <CardMedia className={classes.media} image={product.thumbnail}/>
            <CardContent>
                <Typography component="p">{product.title}</Typography>
            ${product.price}  {product.currency_id}
            </CardContent>
            Cantidades disponibles: {product.available_quantity}
            <CardContent>
            {(product.condition === 'new') ? 'Nuevo' : 'Usados'}
            </CardContent>
            
        </Card>
    )
}

export default withStyles({
item:{
    color: '#fff5c0',
    minHeight: "700ox",
    minWidth: "600px",
    margin: "1em",
    textAlign: "center",
    boxSizing: "border box",
    background: "#394867",
    borderColor: "#ff8585",
},
media:{
    minHeight: "500px",
    minWidth: "500px",
}
})(ProductCard);