"use strict";
// Satellite kind (contract names) + wire-format mapping helpers
Object.defineProperty(exports, "__esModule", { value: true });
exports.WIRE_SATELLITE_KINDS = exports.WIRE_BY_KIND = exports.toWireSatelliteKind = exports.KIND_BY_WIRE = exports.fromWireSatelliteKind = exports.SATELLITE_KINDS = void 0;
var satellite_kind_1 = require("./satellite-kind");
Object.defineProperty(exports, "SATELLITE_KINDS", { enumerable: true, get: function () { return satellite_kind_1.SATELLITE_KINDS; } });
var wire_mapping_1 = require("./wire-mapping");
Object.defineProperty(exports, "fromWireSatelliteKind", { enumerable: true, get: function () { return wire_mapping_1.fromWireSatelliteKind; } });
Object.defineProperty(exports, "KIND_BY_WIRE", { enumerable: true, get: function () { return wire_mapping_1.KIND_BY_WIRE; } });
Object.defineProperty(exports, "toWireSatelliteKind", { enumerable: true, get: function () { return wire_mapping_1.toWireSatelliteKind; } });
Object.defineProperty(exports, "WIRE_BY_KIND", { enumerable: true, get: function () { return wire_mapping_1.WIRE_BY_KIND; } });
Object.defineProperty(exports, "WIRE_SATELLITE_KINDS", { enumerable: true, get: function () { return wire_mapping_1.WIRE_SATELLITE_KINDS; } });
//# sourceMappingURL=index.js.map