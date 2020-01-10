"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
const core_1 = __importDefault(require("./core"));
async function default_1(config) {
    if (!config) {
        throw new Error('Config is mandatory');
    }
    const coreMapper = new core_1.default(config);
    coreMapper.preLaunch();
    await coreMapper.sitemapMapper(config.pagesDirectory);
    coreMapper.finish();
}
exports.default = default_1;
