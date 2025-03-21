import type { OpenMode } from "node:fs";

export type SteamworksClient = import('steamworks.js').Client
// @ts-expect-error
export type NamespacedFunctionReturnType<TNamespace extends keyof SteamworksClient, TFunction extends keyof SteamworksClient[TNamespace]> = ReturnType<SteamworksClient[TNamespace][TFunction]>

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

export type Paths =
    // home
    | 'home'
    // appdata/roaming
    | 'appData'
    // appdata/roaming/appid
    | 'userData'
    // appdata/local
    | 'localAppData'
    // appdata/local/appid
    | 'localUserData'
    | 'sessionData'
    | 'temp'
    | 'exe'
    | 'module'
    | 'desktop'
    | 'documents'
    | 'downloads'
    | 'music'
    | 'pictures'
    | 'videos'
    | 'recent'
    | 'logs'
    | 'crashDumps'
    | 'app'
    | 'project'

export interface MessagePaths extends MessageBase {
    url: '/paths';
    input: {
        body: {
            name: Paths
        }
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

// ---
export interface MessageSetAlwaysOnTop extends MessageBase {
    url: '/window/set-always-on-top';
    input: {
        body: {
            value: boolean
        }
    }
    output: {
        body: {
            success: boolean
        };
    }
}

// ---
export interface MessageSetHeight extends MessageBase {
    url: '/window/set-height';
    input: {
        body: {
            value: number
        }
    }
    output: {
        body: {
            success: boolean
        };
    }
}

// ---
export interface MessageSetWidth extends MessageBase {
    url: '/window/set-width';
    input: {
        body: {
            value: number
        }
    }
    output: {
        body: {
            success: boolean
        };
    }
}

// ---
export interface MessageSetMaximumSize extends MessageBase {
    url: '/window/set-maximum-size';
    input: {
        body: {
            height: number;
            width: number;
        }
    }
    output: {
        body: {
            success: boolean
        };
    }
}

// ---
export interface MessageSetMinimumSize extends MessageBase {
    url: '/window/set-minimum-size';
    input: {
        body: {
            height: number;
            width: number;
        }
    }
    output: {
        body: {
            success: boolean
        };
    }
}

// ---
export interface MessageSetResizable extends MessageBase {
    url: '/window/set-resizable';
    input: {
        body: {
            value: boolean
        }
    }
    output: {
        body: {
            success: boolean
        };
    }
}

// ---
export interface MessageSetTitle extends MessageBase {
    url: '/window/set-title';
    input: {
        body: {
            value: string
        }
    }
    output: {
        body: {
            success: boolean
        };
    }
}

// ---
export interface MessageSetX extends MessageBase {
    url: '/window/set-x';
    input: {
        body: {
            value: number
        }
    }
    output: {
        body: {
            success: boolean
        };
    }
}

// ---
export interface MessageSetY extends MessageBase {
    url: '/window/set-y';
    input: {
        body: {
            value: number
        }
    }
    output: {
        body: {
            success: boolean
        };
    }
}

// ---
export interface MessageShowDevTools extends MessageBase {
    url: '/window/show-dev-tools';
    input: {
        body: {
            value: boolean
        }
    }
    output: {
        body: {
            success: boolean
        };
    }
}

export type FullscreenStates = 'normal' | 'fullscreen'

// ---
export interface MessageSetFullscreen extends MessageBase {
    url: '/window/set-fullscreen';
    input: {
        body: {
            value: FullscreenStates
        }
    }
    output: {
        body: {
            success: boolean
        };
    }
}

// ---
export interface MessageWindowUnmaximize extends MessageBase {
    url: '/window/unmaximize';
    input: {
    }
    output: {
        body: {
            success: boolean
        };
    }
}

// ---
export interface MessageShowFolderDialog extends MessageBase {
    url: '/dialog/folder';
    input: {
    }
    output: {
        body: {
            success: boolean
            canceled: boolean
            paths: string[]
        };
    }
}

export interface FileFilter {
    name: string
    extensions: string[]
}

// ---
export interface MessageShowOpenDialog extends MessageBase {
    url: '/dialog/open';
    input: {
        body: {
            filters: FileFilter[]
        }
    }
    output: {
        body: {
            success: boolean
            canceled: boolean
            paths: string[]
        };
    }
}

// ---
export interface MessageShowSaveDialog extends MessageBase {
    url: '/dialog/save';
    input: {
        body: {
            filters: FileFilter[]
        }
    }
    output: {
        body: {
            success: boolean
            path: string
            canceled: boolean
        };
    }
}

// ---
export interface MessageCopyFile extends MessageBase {
    url: '/fs/copy';
    input: {
        body: {
            source: string
            destination: string
            overwrite: boolean
        }
    }
    output: {
        body: {
            success: boolean
        };
    }
}

// ---
export interface MessageCreateFolder extends MessageBase {
    url: '/fs/folder/create';
    input: {
        body: {
            path: string
            recursive?: boolean
        }
    }
    output: {
        body: {
            success: boolean
        };
    }
}

// ---
export interface MessageDelete extends MessageBase {
    url: '/fs/delete';
    input: {
        body: {
            path: string
            recursive?: boolean
        }
    }
    output: {
        body: {
            success: boolean
        };
    }
}

export type FileFolder =
    | {
        type: 'file'
        name: string
        parentPath: string
        path: string
    }
    | {
        type: 'folder'
        name: string
        parentPath: string
        path: string
    }

// ---
export interface MessageListFiles extends MessageBase {
    url: '/fs/list';
    input: {
        body: {
            path: string
            recursive?: boolean
        }
    }
    output: {
        body: {
            success: boolean
            list: FileFolder[]
        };
    }
}

export interface MessageFileSize extends MessageBase {
    url: '/fs/file/size';
    input: {
        body: {
            path: string
        }
    }
    output: {
        body: {
            success: boolean
            size: number
        };
    }
}

// ---
export interface MessageMove extends MessageBase {
    url: '/fs/move';
    input: {
        body: {
            source: string
            destination: string
            overwrite: boolean
        }
    }
    output: {
        body: {
            success: boolean
        };
    }
}

// ---
export interface MessageOpen extends MessageBase {
    url: '/open';
    input: {
        body: {
            path: string // path or URL
        }
    }
    output: {
        body: {
            success: boolean
        };
    }
}

export interface MessageExplorerOpen extends MessageBase {
    url: '/show-in-explorer',
    input: {
        body: {
            path: string
        }
    }
    output: {
        body: {
            success: boolean
        };
    }
}

export interface MessageRun extends MessageBase {
    url: '/run';
    input: {
        body: {
            command: string
            args?: string[]
            cwd?: string
            env?: Record<string, string>
        }
    }
    output: {
        body: {
            success: boolean
            stdout: string
            stderr: string
        };
    }
}


// ---
export interface MessageReadFile extends MessageBase {
    url: '/fs/file/read';
    input: {
        body: {
            path: string // path or URL
            encoding: BufferEncoding
        }
    }
    output: {
        body: {
            success: boolean
            content: string
        } | {
            success: false
            error: string
        };
    }
}

// ---
export interface MessageReadFileBinary extends MessageBase {
    url: '/fs/file/read/binary';
    input: {
        body: {
            path: string // path or URL
        }
    }
    output: {
        body: {
            success: boolean
            content: Array<number>
        };
    }
}

// ---
export interface MessageWriteFile extends MessageBase {
    url: '/fs/file/write';
    input: {
        body: {
            path: string // path or URL
            contents: string
            encoding: BufferEncoding | undefined
            flag?: OpenMode | undefined
        }
    }
    output: {
        body: {
            success: boolean
        };
    }
}

// ---
export interface MessageEngine extends MessageBase {
    url: '/engine';
    input: {
    }
    output: {
        body: {
            engine: 'tauri' | 'electron'
        };
    }
}

// ---
export interface MessageExistFile extends MessageBase {
    url: '/fs/exist';
    input: {
        body: {
            path: string // path or URL
        }
    }
    output: {
        body: {
            success: boolean
        };
    }
}

export interface SteamRaw<TNamespace extends keyof SteamworksClient, TFunction extends keyof SteamworksClient[TNamespace]> extends MessageBase {
    url: '/steam/raw';
    input: {
        body: {
            namespace: string;
            method: string;
            args: unknown[]
        };
    };
    output: {
        body: {
            success: boolean;
            data: NamespacedFunctionReturnType<TNamespace, TFunction>
        };
    };
}

// https://discord.com/developers/docs/events/gateway-events#activity-object
export interface DiscordSetActivity extends MessageBase {
    url: '/discord/set-activity';
    input: {
        body: {
            details: string
            state: string
            startTimestamp: string
            largeImageKey: string
            largeImageText:string
            smallImageKey:string
            smallImageText: string
        };
    };
    output: {
        body: {
            success: boolean;
        };
    };
}

export interface FullscreenState extends MessageBase {
    url: '/window/fullscreen-state';
    input: {
        body: {
            state: FullscreenStates
        };
    };
    output: never;
}
export interface MessageInfos extends MessageBase {
    url: '/infos';
    input: {
        body: {

        };
    };
    output: {
        body: {
            platform: string;
            arch: string;
            version: string;
        }
    };
}

export type MakeInputOutput<T extends MessageBase, KEY extends 'input' | 'output'> = {
    url: T['url'];
    correlationId?: T['correlationId'];
} & T[KEY]

export type InferResponseFromMessage<T extends MakeInputOutput<any, 'input'>> = T extends MakeInputOutput<infer R, 'input'> ? MakeInputOutput<R, 'output'> : never

type A = InferResponseFromMessage<MakeInputOutput<MessagePaths, 'input'>>

// ---

export type Message =
    | MakeInputOutput<MessagePaths, 'input'>
    | MakeInputOutput<MessageRequestAttention, 'input'>
    | MakeInputOutput<MessageWindowMaximize, 'input'>
    | MakeInputOutput<MessageWindowMinimize, 'input'>
    | MakeInputOutput<MessageWindowRestore, 'input'>
    | MakeInputOutput<MessageRequestAttention, 'input'>
    | MakeInputOutput<MessageSetAlwaysOnTop, 'input'>
    | MakeInputOutput<MessageSetHeight, 'input'>
    | MakeInputOutput<MessageSetWidth, 'input'>
    | MakeInputOutput<MessageSetMaximumSize, 'input'>
    | MakeInputOutput<MessageSetMinimumSize, 'input'>
    | MakeInputOutput<MessageSetResizable, 'input'>
    | MakeInputOutput<MessageSetTitle, 'input'>
    | MakeInputOutput<MessageSetX, 'input'>
    | MakeInputOutput<MessageSetY, 'input'>
    | MakeInputOutput<MessageShowDevTools, 'input'>
    | MakeInputOutput<MessageSetFullscreen, 'input'>
    | MakeInputOutput<MessageWindowUnmaximize, 'input'>
    | MakeInputOutput<MessageShowFolderDialog, 'input'>
    | MakeInputOutput<MessageShowOpenDialog, 'input'>
    | MakeInputOutput<MessageShowSaveDialog, 'input'>
    | MakeInputOutput<MessageCopyFile, 'input'>
    | MakeInputOutput<MessageCreateFolder, 'input'>
    | MakeInputOutput<MessageDelete, 'input'>
    | MakeInputOutput<MessageListFiles, 'input'>
    | MakeInputOutput<MessageMove, 'input'>
    | MakeInputOutput<MessageOpen, 'input'>
    | MakeInputOutput<MessageReadFile, 'input'>
    | MakeInputOutput<MessageReadFileBinary, 'input'>
    | MakeInputOutput<MessageWriteFile, 'input'>
    | MakeInputOutput<MessageExistFile, 'input'>
    | MakeInputOutput<SteamRaw<any, any>, 'input'>
    | MakeInputOutput<MessageEngine, 'input'>
    | MakeInputOutput<MessageRun, 'input'>
    | MakeInputOutput<MessageExplorerOpen, 'input'>
    | MakeInputOutput<MessageFileSize, 'input'>
    | MakeInputOutput<FullscreenState, 'input'>
    | MakeInputOutput<MessageInfos, 'input'>
    | MakeInputOutput<DiscordSetActivity, 'input'>

export type Response =
    | MakeInputOutput<MessagePaths, 'output'>
    | MakeInputOutput<MessageRequestAttention, 'output'>
    | MakeInputOutput<MessageWindowMaximize, 'output'>
    | MakeInputOutput<MessageWindowMinimize, 'output'>
    | MakeInputOutput<MessageWindowRestore, 'output'>
    | MakeInputOutput<MessageRequestAttention, 'output'>
    | MakeInputOutput<MessageSetAlwaysOnTop, 'output'>
    | MakeInputOutput<MessageSetHeight, 'output'>
    | MakeInputOutput<MessageSetWidth, 'output'>
    | MakeInputOutput<MessageSetMaximumSize, 'output'>
    | MakeInputOutput<MessageSetMinimumSize, 'output'>
    | MakeInputOutput<MessageSetResizable, 'output'>
    | MakeInputOutput<MessageSetTitle, 'output'>
    | MakeInputOutput<MessageSetX, 'output'>
    | MakeInputOutput<MessageSetY, 'output'>
    | MakeInputOutput<MessageShowDevTools, 'output'>
    | MakeInputOutput<MessageSetFullscreen, 'output'>
    | MakeInputOutput<MessageWindowUnmaximize, 'output'>
    | MakeInputOutput<MessageShowFolderDialog, 'output'>
    | MakeInputOutput<MessageShowOpenDialog, 'output'>
    | MakeInputOutput<MessageShowSaveDialog, 'output'>
    | MakeInputOutput<MessageCopyFile, 'output'>
    | MakeInputOutput<MessageCreateFolder, 'output'>
    | MakeInputOutput<MessageDelete, 'output'>
    | MakeInputOutput<MessageListFiles, 'output'>
    | MakeInputOutput<MessageMove, 'output'>
    | MakeInputOutput<MessageOpen, 'output'>
    | MakeInputOutput<MessageReadFile, 'output'>
    | MakeInputOutput<MessageReadFileBinary, 'output'>
    | MakeInputOutput<MessageWriteFile, 'output'>
    | MakeInputOutput<MessageExistFile, 'output'>
    | MakeInputOutput<MessageEngine, 'output'>
    | MakeInputOutput<MessageRun, 'output'>
    | MakeInputOutput<MessageExplorerOpen, 'output'>
    | MakeInputOutput<MessageFileSize, 'output'>
    | MakeInputOutput<SteamRaw<any, any>, 'output'>
    | MakeInputOutput<FullscreenState, 'output'>
    | MakeInputOutput<MessageInfos, 'output'>
    | MakeInputOutput<DiscordSetActivity, 'output'>
