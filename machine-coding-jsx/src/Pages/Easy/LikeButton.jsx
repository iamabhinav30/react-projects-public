/**
 * Description
Create a Like button that changes its appearance based on different states.
You need to implement a Like button that behaves differently based on its current state: default, hover, and clicked. The button should change its styles and the heart icon color as follows:
1. Default state: The button has a gray border, gray text color, a white background and a red heart
2. Hover state: The button should show a red border and red text when hovered over.
3. Clicked state: When clicked, the background color should change to red, the text color should become white, and the heart icon should change to white
Constraints & Edge Cases
• Ensure that the state transitions smoothly between hover and clicked states.
• The button should toggle between the default and clicked states when clicked.
• The button must be labelled "Like" to match the test cases.
*/

import React, { useState } from ' react'
function LikeButton() {
    const [liked, setLiked] = useState(false);
    const [hovered, setHovered] = useState(false);
    // Base styles for the button
    const baseStyle = {
        padding: '0.5rem 1rem',
        fontSize: '1rem',
        border: '1px solid gray',
        color: 'gray', background: 'white', cursor: 'pointer',
        transition: 'all 0.2s ease'
    };
    // Overrides when hovered
    const hoverStyle = {
        border: '1px solid red', color: 'red',
    };
    // Overrides when clicked (liked)
    const likedStyle = {
        border: '1px solid red', background: 'red', color: 'white',
    };


    // Compose the final style based on state
    let style = { ...baseStyle };
    if (liked) {
        style = { ...style, ...likedStyle };
    } else if (hovered)
        style = { ...style, ...hoverStyle };
    return (
        <button style={style}
            onClick={() => setLiked(prev => !prev)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        > {liked ? " ❤️ " : 'white'} Like
        </button>
    );
}
export default LikeButton;