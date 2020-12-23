---
id: features
title: Features
---

 

## Forms 

 ```scss 
 @forward './scss/_user-controls/forms.scss';
 ```

 ### Example
```jsx live
function Clock(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
```
  
## Buttons 
 ```scss
 @forward './scss/_user-controls/buttons.scss';
```

## Colors
```scss 
@import './scss/_foundation/colors.scss';
```
## Alternative Colors
```scss 
@import './scss/_foundation/alt-colors.scss';
```

## Typography
```scss
 @import './scss/_foundation/typography.scss';
 ```
## Themes
```scss
 @import './scss/_foundation/themes.scss';
 ```
 ## Utilities
```scss
 @import './scss/_foundation/utilities.scss';
 ```
 ## Cards
```scss
 @import './scss/_component/cards.scss';
 ```
 ## Mixins
```scss
 @import './scss/_component/feature-mixins.scss';
 ``` 
