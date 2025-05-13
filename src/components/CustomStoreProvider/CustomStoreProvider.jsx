"use client"
import { ourStore } from '../../store/store';
import React from 'react';
import { Provider } from 'react-redux';

export default function CustomStoreProvider({children}) {
  return (
<Provider store={ourStore}>
{children}
</Provider>
  );
}