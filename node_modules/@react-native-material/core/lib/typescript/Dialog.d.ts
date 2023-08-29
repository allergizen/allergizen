import React from 'react';
export interface DialogProps {
    visible?: boolean;
    onDismiss?: () => void;
}
declare const Dialog: React.FC<DialogProps>;
export default Dialog;
