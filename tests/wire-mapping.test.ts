import { describe, expect, it } from 'vitest';
import { SATELLITE_KINDS, type SatelliteKind } from '../src/satellite-kind';
import {
  fromWireSatelliteKind,
  KIND_BY_WIRE,
  toWireSatelliteKind,
  WIRE_BY_KIND,
  WIRE_SATELLITE_KINDS,
  type WireSatelliteKind,
} from '../src/wire-mapping';

describe('wire-mapping', () => {
  it('maps every contract kind to a wire kind via WIRE_BY_KIND', () => {
    for (const kind of SATELLITE_KINDS) {
      const wire = WIRE_BY_KIND[kind];
      expect(WIRE_SATELLITE_KINDS).toContain(wire);
    }
  });

  it('maps every wire kind to a contract kind via KIND_BY_WIRE', () => {
    for (const wire of WIRE_SATELLITE_KINDS) {
      const kind = KIND_BY_WIRE[wire];
      expect(SATELLITE_KINDS).toContain(kind);
    }
  });

  it('round-trips contract → wire → contract', () => {
    for (const kind of SATELLITE_KINDS) {
      const wire = toWireSatelliteKind(kind);
      const back = fromWireSatelliteKind(wire);
      expect(back).toBe(kind);
    }
  });

  it('round-trips wire → contract → wire', () => {
    for (const wire of WIRE_SATELLITE_KINDS) {
      const kind = fromWireSatelliteKind(wire);
      const back = toWireSatelliteKind(kind);
      expect(back).toBe(wire);
    }
  });

  it('toWireSatelliteKind matches table', () => {
    const expected: Record<SatelliteKind, WireSatelliteKind> = {
      EMPORION: 'POS_EMPORION',
      PRINT_SERVER: 'PRINT_SERVER',
      HORUS: 'PUNCH_AGENT',
    };
    for (const [kind, wire] of Object.entries(expected) as [SatelliteKind, WireSatelliteKind][]) {
      expect(toWireSatelliteKind(kind)).toBe(wire);
    }
  });
});
