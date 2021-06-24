function getReceivedData(message) {
  raw_fields = {};
  raw_fields["name"] = "Suspicous Email",
  raw_fields["device_product"] = "Gmail Addon",
  raw_fields['id'] = message.getId(); //Gets the ID of this message.
  raw_fields['from'] = message.getFrom();
  raw_fields['date'] = message.getDate().getTime();
  raw_fields['subject'] = message.getSubject(); //Gets the subject of this message.
  raw_fields['to'] = message.getTo(); //Gets the comma-separated recipients of this message.
  raw_fields['plain body'] = message.getPlainBody(); //Gets the content of the body of this message without HTML formatting. 
  raw_fields['cc'] = message.getCc(); //Gets the comma-separated recipients cc'd on this message.
  raw_fields['bcc'] = message.getBcc(); //Gets the comma-separated recipients bcc'd on this message.
  raw_fields['raw content'] = message.getRawContent(); //Gets the raw content of this message. This is equivalent to "Show Original" in the Gmail UI.
  raw_fields['body'] = message.getBody(); //Gets the HTML content of the body of this message.
  raw_fields['reply to'] = message.getReplyTo(); //Gets the reply-to address of this message (usually the sender).
  // raw_fields['threads'] = message.getThread(); //Gets the thread that contains this message.
  // raw_fields['attachments'] = message.getAttachments(); //Gets all the attachments for this message.

  return raw_fields;
}

function getAPIObject(message){
    raw_fields = getReceivedData(message);
    var d = new Date();
    var uniq_uuid = d.getTime();
    jsonAPI = {};
    jsonAPI = {
    "Cases": [{
      "CreatorUserId": null,
      "Events": [{
        "_fields": {
          "BaseEventIds": [],
          "ParentEventId": 0,
          "DeviceVendor": "Gmail",
          "DeviceProduct": "Gmail Addon Real",
          "DeviceEventClassId": null
        },
        "_rawDataFields": {

        },
        "Environment": null,
        "SourceSystemName": null,
        "Extensions": []
      }],
      "Environment": "Default Environment",
      "SourceSystemName": "Gmail",
      "TicketId": uniq_uuid,

      "DisplayId": uniq_uuid,
      "Reason": null,
      "Name": "Suspicous Email",
      "DeviceVendor": "Gmail",
      "DeviceProduct": "Gmail Addon",
      "Priority": -1,
      "RuleGenerator": "Gmail Addon",
      "SourceGroupingIdentifier": null,
      "PlaybookTriggerKeywords": [],
      "Extensions": [],
      "Attachments": [],
      "IsTestCase": false

    }]
  }
    jsonAPI['Cases'][0]['TicketId'] = uniq_uuid;
    jsonAPI['Cases'][0]['Description'] = raw_fields['subject'];
    jsonAPI['Cases'][0]['StartTime'] = raw_fields['date'];
    jsonAPI['Cases'][0]['EndTime'] = raw_fields['date'];
    jsonAPI['Cases'][0]['Events'][0]['_rawDataFields'] = raw_fields;

    return jsonAPI;
}

function stringifyObject(message){
  jsonAPI = getAPIObject(message);
  return JSON.stringify(jsonAPI);
}

