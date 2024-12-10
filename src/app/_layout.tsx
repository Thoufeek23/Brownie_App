import { Stack } from "expo-router";

export default function RootLayout() {
    return (<Stack>
        <Stack.Screen 
        name='(shop)' 
        options={{ headerShown: true, title: 'Shop'}}
        />
        <Stack.Screen 
        name='catogories' 
        options={{ headerShown: true, title: 'Catagories'}}
        />
        <Stack.Screen 
        name='product' 
        options={{ headerShown: true, title: 'Product'}}
        />
        <Stack.Screen 
        name='cart' 
        options={{ presentation: 'modal', title: 'Shopping Cart'}}
        />
        <Stack.Screen 
        name='auth' 
        options={{ headerShown: true }}
        />
    </Stack>
    );
};