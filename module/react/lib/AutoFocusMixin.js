goog.provide("module$react$lib$AutoFocusMixin");goog.require("module$react$lib$focusNode");var focusNode$$module$react$lib$AutoFocusMixin=module$react$lib$focusNode;var AutoFocusMixin$$module$react$lib$AutoFocusMixin={componentDidMount:function(){if(this.props.autoFocus)focusNode$$module$react$lib$AutoFocusMixin(this.getDOMNode())}};module$react$lib$AutoFocusMixin=AutoFocusMixin$$module$react$lib$AutoFocusMixin