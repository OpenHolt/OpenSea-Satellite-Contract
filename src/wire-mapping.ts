import type { SatelliteKind } from './satellite-kind';

/**
 * Wire format histórico (DB Prisma enum + WS payloads em produção até a
 * migração SAT-RELEASE-05). NÃO usar diretamente em código novo — preferir
 * `SatelliteKind` do contract e converter na borda I/O via os helpers
 * abaixo.
 */
export const WIRE_SATELLITE_KINDS = ['POS_EMPORION', 'PRINT_SERVER', 'PUNCH_AGENT'] as const;

export type WireSatelliteKind = (typeof WIRE_SATELLITE_KINDS)[number];

export const WIRE_BY_KIND: Record<SatelliteKind, WireSatelliteKind> = {
  EMPORION: 'POS_EMPORION',
  PRINT_SERVER: 'PRINT_SERVER',
  HORUS: 'PUNCH_AGENT',
};

export const KIND_BY_WIRE: Record<WireSatelliteKind, SatelliteKind> = {
  POS_EMPORION: 'EMPORION',
  PRINT_SERVER: 'PRINT_SERVER',
  PUNCH_AGENT: 'HORUS',
};

export function toWireSatelliteKind(kind: SatelliteKind): WireSatelliteKind {
  return WIRE_BY_KIND[kind];
}

export function fromWireSatelliteKind(wire: WireSatelliteKind): SatelliteKind {
  return KIND_BY_WIRE[wire];
}
