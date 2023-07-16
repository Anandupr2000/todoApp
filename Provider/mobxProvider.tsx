// mobxProvider.tsx
import React from 'react';
import { Provider } from 'mobx-react';
import myStore from '@/models/Store';

interface MobXProviderProps {
    children: React.ReactNode;
}

const MobXProvider: React.FC<MobXProviderProps> = ({ children }) => {
    return <Provider myStore={myStore}>{children}</Provider>;
};

export default MobXProvider;
