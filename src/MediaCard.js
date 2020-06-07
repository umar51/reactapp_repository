import React from 'react';

function MediaCard ({title, body, imageUrl}) {
   return <div><h2>{title}</h2><p><strong>{body}</strong></p><img src={imageUrl}/></div>; 

}
export default MediaCard;