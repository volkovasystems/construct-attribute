var constructAttribute = function constructAttribute( attributeName, attributeValue ){
	/*:
		@meta-configuration:
			{
				"attributeName:required": "string",
				"attributeValue": "string"
			}
		@end-meta-configuration
	*/

	var attribute = document.createAttribute( attributeName );
	attribute.nodeValue = attributeValue || "";

	return attribute;
};