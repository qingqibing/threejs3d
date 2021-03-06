
export const Cesium3DTileRefine = {
    /**
     * Render this tile and, if it doesn't meet the screen space error, also refine to its children.
     *
     * @type {Number}
     * @constant
     */
    ADD : 0,

    /**
     * Render this tile or, if it doesn't meet the screen space error, refine to its descendants instead.
     *
     * @type {Number}
     * @constant
     */
    REPLACE : 1
};
