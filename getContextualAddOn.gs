function getContextualAddOn(event) {
  var message = getCurrentMessage(event);
  var email_data = stringifyObject(message);
  var card = createExpensesCard();
  PropertiesService.getScriptProperties().deleteProperty('payload');
  PropertiesService.getScriptProperties().setProperty('payload', email_data);
  return [card.build()];
}

function getCurrentMessage(event) {
  var accessToken = event.messageMetadata.accessToken;
  var messageId = event.messageMetadata.messageId;
  GmailApp.setCurrentMessageAccessToken(accessToken);
  return GmailApp.getMessageById(messageId);
}


