import type { WsAppReleasePublishedMessage } from './app-release-published';
import type { WsDeviceRevokedMessage } from './device-revoked';
import type { WsHeartbeatAckMessage, WsHeartbeatMessage } from './heartbeat';
import type { WsHelloMessage } from './hello';
import type { WsWelcomeMessage } from './welcome';
/**
 * Toda mensagem que o servidor pode enviar para um satélite. Discriminada
 * por `type` — TS narrowing garante exhaustiveness em switch/case.
 */
export type WsServerMessage = WsWelcomeMessage | WsHeartbeatAckMessage | WsAppReleasePublishedMessage | WsDeviceRevokedMessage;
/**
 * Toda mensagem que um satélite pode enviar para o servidor. Discriminada
 * por `type`.
 */
export type WsClientMessage = WsHelloMessage | WsHeartbeatMessage;
//# sourceMappingURL=envelope.d.ts.map