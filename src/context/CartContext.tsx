'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Book } from '@/data/books';

export interface CartItem {
    book: Book;
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (book: Book, quantity: number) => void;
    updateQuantity: (index: number, delta: number) => void;
    removeItem: (index: number) => void;
    clearCart: () => void;
    totalItems: number;
    subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isInitialized, setIsInitialized] = useState(false);

    // Load from local storage
    useEffect(() => {
        const savedCart = localStorage.getItem('gcpp_cart');
        if (savedCart) {
            try {
                setCartItems(JSON.parse(savedCart));
            } catch (error) {
                console.error('Failed to parse cart from local storage', error);
            }
        }
        setIsInitialized(true);
    }, []);

    // Save to local storage
    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem('gcpp_cart', JSON.stringify(cartItems));
        }
    }, [cartItems, isInitialized]);

    const addToCart = (book: Book, quantity: number) => {
        setCartItems(prev => {
            const existingItemIndex = prev.findIndex(item => item.book.id === book.id);
            if (existingItemIndex >= 0) {
                // Book exists, update quantity
                const newCart = [...prev];
                newCart[existingItemIndex] = {
                    ...newCart[existingItemIndex],
                    quantity: newCart[existingItemIndex].quantity + quantity
                };
                return newCart;
            } else {
                // New item
                return [...prev, { book, quantity }];
            }
        });
    };

    const updateQuantity = (index: number, delta: number) => {
        setCartItems(prev => prev.map((item, i) =>
            i === index ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        ));
    };

    const removeItem = (index: number) => {
        setCartItems(prev => prev.filter((_, i) => i !== index));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cartItems.reduce((sum, item) => sum + (item.book.price * item.quantity), 0);

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            updateQuantity,
            removeItem,
            clearCart,
            totalItems,
            subtotal
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
