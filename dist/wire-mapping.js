"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KIND_BY_WIRE = exports.WIRE_BY_KIND = exports.WIRE_SATELLITE_KINDS = void 0;
exports.toWireSatelliteKind = toWireSatelliteKind;
exports.fromWireSatelliteKind = fromWireSatelliteKind;
/**
 * Wire format histórico (DB Prisma enum + WS payloads em produção até a
 * migração SAT-RELEASE-05). NÃO usar diretamente em código novo — preferir
 * `SatelliteKind` do contract e converter na borda I/O via os helpers
 * abaixo.
 */
exports.WIRE_SATELLITE_KINDS = ['POS_EMPORION', 'PRINT_SERVER', 'PUNCH_AGENT'];
exports.WIRE_BY_KIND = {
    EMPORION: 'POS_EMPORION',
    PRINT_SERVER: 'PRINT_SERVER',
    HORUS: 'PUNCH_AGENT',
};
exports.KIND_BY_WIRE = {
    POS_EMPORION: 'EMPORION',
    PRINT_SERVER: 'PRINT_SERVER',
    PUNCH_AGENT: 'HORUS',
};
function toWireSatelliteKind(kind) {
    return exports.WIRE_BY_KIND[kind];
}
function fromWireSatelliteKind(wire) {
    return exports.KIND_BY_WIRE[wire];
}
//# sourceMappingURL=wire-mapping.js.map