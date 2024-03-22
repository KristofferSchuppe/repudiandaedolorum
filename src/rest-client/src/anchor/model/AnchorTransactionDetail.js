/*
 * Anchor API
 * # Introduction This document discusses Klaytn API Service (KAS) Anchor API. Anchor API features functions for sending metadata to prove data reliability and ensuring the reliability of service chain data to the Klaytn main chain.     # Error Codes  ## 400: Bad Request   | Code | Messages |   | --- | --- |   | 1071010 | data don't exist 1071615 | its value is out of range; size 1072100 | same payload ID or payload was already anchored 1072101 | all configured accounts have insufficient funds |   # Authentication  <!-- ReDoc-Inject: <security-definitions> -->
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.17
 *
 * Do not edit the class manually.
 *
 */

;(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['../../ApiClient'], factory)
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../../ApiClient'))
    } else {
        // Browser globals (root is window)
        if (!root.AnchorApi) {
            root.AnchorApi = {}
        }
        root.AnchorApi.AnchorTransactionDetail = factory(root.AnchorApi.ApiClient)
    }
})(this, function(ApiClient) {
    /**
     * The AnchorTransactionDetail model module.
     * @class AnchorTransactionDetail
     * @version 1.0
     */

    /**
     * Constructs a new <code>AnchorTransactionDetail</code>.
     * Anchoring transaction information
     * @alias AnchorTransactionDetail
     * @class
     * @param payload {Object.<String, Object>} Anchor data. ID is set to SHA256 (payload) by default if an ID is not provided. It receives a string-type ID value and determines that it is not set if it is not a string type.
     * @param transactionHash {String} Transaction hash of anchoring transaction
     */
    const AnchorTransactionDetail = function(payload, transactionHash) {
        this.payload = payload
        this.transactionHash = transactionHash
    }

    /**
     * Constructs a <code>AnchorTransactionDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AnchorTransactionDetail} obj Optional instance to populate.
     * @return {AnchorTransactionDetail} The populated <code>AnchorTransactionDetail</code> instance.
     * @memberof AnchorTransactionDetail
     */
    AnchorTransactionDetail.constructFromObject = function(data, obj) {
        if (data) {
            obj = obj || new AnchorTransactionDetail()
            if (data.hasOwnProperty('payload')) obj.payload = ApiClient.convertToType(data.payload, { String: Object })
            if (data.hasOwnProperty('transactionHash')) obj.transactionHash = ApiClient.convertToType(data.transactionHash, 'String')
        }
        return obj
    }

    /**
     * Anchor data. ID is set to SHA256 (payload) by default if an ID is not provided. It receives a string-type ID value and determines that it is not set if it is not a string type.
     * @type {Object.<String, Object>}
     * @memberof AnchorTransactionDetail
     */
    AnchorTransactionDetail.prototype.payload = undefined

    /**
     * Transaction hash of anchoring transaction
     * @type {String}
     * @memberof AnchorTransactionDetail
     */
    AnchorTransactionDetail.prototype.transactionHash = undefined

    return AnchorTransactionDetail
})