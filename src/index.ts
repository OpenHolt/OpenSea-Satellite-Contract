// Satellite kind (contract names) + wire-format mapping helpers

// Release metadata
export type { ReleaseInfo } from './release/release-info';
export { SATELLITE_KINDS, type SatelliteKind } from './satellite-kind';
export {
  fromWireSatelliteKind,
  KIND_BY_WIRE,
  toWireSatelliteKind,
  WIRE_BY_KIND,
  WIRE_SATELLITE_KINDS,
  type WireSatelliteKind,
} from './wire-mapping';

// WebSocket message types
export type {
  DeviceRevokedReason,
  WsAppReleasePublishedMessage,
  WsClientMessage,
  WsDeviceRevokedMessage,
  WsHeartbeatAckMessage,
  WsHeartbeatMessage,
  WsHelloMessage,
  WsServerMessage,
  WsWelcomeMessage,
} from './ws';
