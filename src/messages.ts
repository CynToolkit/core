export interface MessageBase {
    url: string;
    correlationId?: string;
    input: {
        body?: any;
    }
    output: {
        body?: any;
    }
}

// ---

export interface MessageFsWriteGetBody {
    path: string;
    content: string;
    overwrite: boolean;
    encoding: 'utf8';
}
export interface MessageFsWriteGet extends MessageBase {
    url: '/fs/write';
    input: {
        body: MessageFsWriteGetBody;
    }
    output: {
        body: {
            success: boolean
        };
    }
}

// ---

export interface MessageUserFolder extends MessageBase {
    url: '/user/folder';
    input: {
    }
    output: {
        body: {
            data: string
        };
    }
}

// ---

export interface MessageWindowMaximize extends MessageBase {
    url: '/window/maximize';
    input: {}
    output: {
        body: {
            success: boolean
        };
    }
}

// ---
export interface MessageWindowMinimize extends MessageBase {
    url: '/window/minimize';
    input: {}
    output: {
        body: {
            success: boolean
        };
    }
}

// ---
export interface MessageWindowRestore extends MessageBase {
    url: '/window/restore';
    input: {}
    output: {
        body: {
            success: boolean
        };
    }
}

// ---
export interface MessageRequestAttention extends MessageBase {
    url: '/window/request-attention';
    input: {}
    output: {
        body: {
            success: boolean
        };
    }
}

export type MakeInputOutput<T extends MessageBase, KEY extends 'input' | 'output'> = {
    url: T['url'];
    correlationId?: T['correlationId'];
} & T[KEY]

// ---

export type Message =
    | MakeInputOutput<MessageFsWriteGet, 'input'>
    | MakeInputOutput<MessageUserFolder, 'input'>
    | MakeInputOutput<MessageRequestAttention, 'input'>
    | MakeInputOutput<MessageWindowMaximize, 'input'>
    | MakeInputOutput<MessageWindowMinimize, 'input'>
    | MakeInputOutput<MessageWindowRestore, 'input'>
    | MakeInputOutput<MessageRequestAttention, 'input'>

export type Response =
    | MakeInputOutput<MessageFsWriteGet, 'output'>
    | MakeInputOutput<MessageUserFolder, 'output'>
    | MakeInputOutput<MessageRequestAttention, 'output'>
    | MakeInputOutput<MessageWindowMaximize, 'output'>
    | MakeInputOutput<MessageWindowMinimize, 'output'>
    | MakeInputOutput<MessageWindowRestore, 'output'>
    | MakeInputOutput<MessageRequestAttention, 'output'>