# Simple React App with Intentional Bugs

This project is a simple React application designed to demonstrate common issues with state management and props passing. The app consists of multiple components: `App`, `Header`, `Counter`, and `Footer`.

## Project Structure

- **App.jsx**: The main component that manages state and renders other components.
- **Header.jsx**: Displays the title of the application.
- **Counter.jsx**: Displays the current count.
- **Footer.jsx**: Displays footer content.

## Intentional Bugs

1. **App Component**:
   - Incorrect state update using `setCount(count + 1)` instead of `setCount(prevCount => prevCount + 1)`
   - Missing required prop for Footer component

2. **Header Component**:
   - No null check for title prop
   - Will crash if title prop is missing or undefined

3. **Counter Component**:
   - No error handling for undefined count prop
   - Unsafe multiplication operation without checks
   - Will crash if count is undefined

4. **Footer Component**:
   - No default value for footerText prop
   - Will render empty paragraph if prop is missing

### Bugged Code Examples

#### App.jsx (With Bugs)
```jsx
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header title="Counter App" />
      <Counter count={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Footer />
    </div>
  );
}
```

## Solutions with Fixed Code

### 1. App Component Fix
- Use previous state for reliable updates
- Add required prop for Footer

```jsx
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header title="Counter App" />
      <Counter count={count} />
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
      <Footer footerText="© 2024 Counter App" />
    </div>
  );
}
```

### 2. Header Component Fix
- Add null check and default value for title

```jsx
function Header({ title = 'Default Title' }) {
  return <h1>{title?.toUpperCase() || 'DEFAULT TITLE'}</h1>;
}
```

### 3. Counter Component Fix
- Add default value and error checking for count

```jsx
function Counter({ count = 0 }) {
  return (
    <div>
      <p>Current Count: {typeof count === 'number' ? count * 2 : 0}</p>
    </div>
  );
}
```

### 4. Footer Component Fix
- Add default value for footerText prop

```jsx
function Footer({ footerText = '© Default Footer Text' }) {
  return <p>{footerText}</p>;
}
```

## Verification Steps

1. Test increment button works correctly
2. Verify all components handle missing props
3. Check that Counter displays correct values
4. Confirm Footer shows proper text

## Key Fixes Explained

1. **State Updates**:
   - Changed `setCount(count + 1)` to `setCount(prevCount => prevCount + 1)`
   - Ensures reliable state updates by using previous state

2. **Props Handling**:
   - Added default values using destructuring: `{ prop = defaultValue }`
   - Added null checks using optional chaining and fallbacks

3. **Error Prevention**:
   - Added type checking for numerical operations
   - Provided fallback values for undefined cases

4. **Default Values**:
   - All components now have default prop values
   - Components won't crash with missing props

## Conclusion

These fixes demonstrate React best practices for:
- Safe state updates
- Proper props handling
- Error prevention
- Default value implementation
