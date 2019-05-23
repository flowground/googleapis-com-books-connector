# ![LOGO](logo.png) Books **flow**ground Connector

## Description

A generated **flow**ground connector for the Books API (version v1).

Generated from: https://api.apis.guru/v2/specs/googleapis.com/books/v1/swagger.json<br/>
Generated at: 2019-05-23T12:13:02+03:00

## API Description

Searches for books and manages your Google Books library.

## Authorization

Supported authorization schemes:
- OAuth2

For OAuth 2.0 you need to specify OAuth Client credentials as environment variables in the connector repository:
* `OAUTH_CLIENT_ID` - your OAuth client id
* `OAUTH_CLIENT_SECRET` - your OAuth client secret

## Actions

### books_cloudloading_addBook

*Tags:* `cloudloading`

#### Input Parameters
* `drive_document_id` - _optional_ - A drive document id. The upload_client_token must not be set.
* `mime_type` - _optional_ - The document MIME type. It can be set only if the drive_document_id is set.
* `name` - _optional_ - The document name. It can be set only if the drive_document_id is set.
* `upload_client_token` - _optional_
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Remove the book and its contents

*Tags:* `cloudloading`

#### Input Parameters
* `volumeId` - _required_ - The id of the book to be removed.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### books_cloudloading_updateBook

*Tags:* `cloudloading`

#### Input Parameters
* `alt` - _optional_ - Data format for the response.
    Possible values: json.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Returns a list of offline dictionary metadata available

*Tags:* `dictionary`

#### Input Parameters
* `cpksver` - _required_ - The device/version ID from which to request the data.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets information regarding the family that the user is part of.

*Tags:* `familysharing`

#### Input Parameters
* `source` - _optional_ - String to identify the originator of this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Initiates sharing of the content with the user's family. Empty response indicates success.

*Tags:* `familysharing`

#### Input Parameters
* `docId` - _optional_ - The docid to share.
* `source` - _optional_ - String to identify the originator of this request.
* `volumeId` - _optional_ - The volume to share.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Initiates revoking content that has already been shared with the user's family. Empty response indicates success.

*Tags:* `familysharing`

#### Input Parameters
* `docId` - _optional_ - The docid to unshare.
* `source` - _optional_ - String to identify the originator of this request.
* `volumeId` - _optional_ - The volume to unshare.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets the current settings for the user.

*Tags:* `myconfig`

#### Input Parameters
* `alt` - _optional_ - Data format for the response.
    Possible values: json.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Release downloaded content access restriction.

*Tags:* `myconfig`

#### Input Parameters
* `cpksver` - _required_ - The device/version ID from which to release the restriction.
* `locale` - _optional_ - ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
* `source` - _optional_ - String to identify the originator of this request.
* `volumeIds` - _required_ - The volume(s) to release restrictions for.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Request concurrent and download access restrictions.

*Tags:* `myconfig`

#### Input Parameters
* `cpksver` - _required_ - The device/version ID from which to request the restrictions.
* `licenseTypes` - _optional_ - The type of access license to request. If not specified, the default is BOTH.
    Possible values: BOTH, CONCURRENT, DOWNLOAD.
* `locale` - _optional_ - ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
* `nonce` - _required_ - The client nonce value.
* `source` - _required_ - String to identify the originator of this request.
* `volumeId` - _required_ - The volume to request concurrent/download restrictions for.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Request downloaded content access for specified volumes on the My eBooks shelf.

*Tags:* `myconfig`

#### Input Parameters
* `cpksver` - _required_ - The device/version ID from which to release the restriction.
* `features` - _optional_ - List of features supported by the client, i.e., 'RENTALS'
* `includeNonComicsSeries` - _optional_ - Set to true to include non-comics series. Defaults to false.
* `locale` - _optional_ - ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
* `nonce` - _required_ - The client nonce value.
* `showPreorders` - _optional_ - Set to true to show pre-ordered books. Defaults to false.
* `source` - _required_ - String to identify the originator of this request.
* `volumeIds` - _optional_ - The volume(s) to request download restrictions for.

### Sets the settings for the user. If a sub-object is specified, it will overwrite the existing sub-object stored in the server. Unspecified sub-objects will retain the existing value.

*Tags:* `myconfig`

#### Input Parameters
* `alt` - _optional_ - Data format for the response.
    Possible values: json.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of annotations, possibly filtered.

*Tags:* `mylibrary`

#### Input Parameters
* `contentVersion` - _optional_ - The content version for the requested volume.
* `layerId` - _optional_ - The layer ID to limit annotation by.
* `layerIds` - _optional_ - The layer ID(s) to limit annotation by.
* `maxResults` - _optional_ - Maximum number of results to return
* `pageToken` - _optional_ - The value of the nextToken from the previous page.
* `showDeleted` - _optional_ - Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false.
* `source` - _optional_ - String to identify the originator of this request.
* `updatedMax` - _optional_ - RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
* `updatedMin` - _optional_ - RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
* `volumeId` - _optional_ - The volume to restrict annotations to.

### Inserts a new annotation.

*Tags:* `mylibrary`

#### Input Parameters
* `annotationId` - _optional_ - The ID for the annotation to insert.
* `country` - _optional_ - ISO-3166-1 code to override the IP-based location.
* `showOnlySummaryInResponse` - _optional_ - Requests that only the summary of the specified layer be provided in the response.
* `source` - _optional_ - String to identify the originator of this request.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets the summary of specified layers.

*Tags:* `mylibrary`

#### Input Parameters
* `layerIds` - _required_ - Array of layer IDs to get the summary for.
* `volumeId` - _required_ - Volume id to get the summary for.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Deletes an annotation.

*Tags:* `mylibrary`

#### Input Parameters
* `annotationId` - _required_ - The ID for the annotation to delete.
* `source` - _optional_ - String to identify the originator of this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates an existing annotation.

*Tags:* `mylibrary`

#### Input Parameters
* `annotationId` - _required_ - The ID for the annotation to update.
* `source` - _optional_ - String to identify the originator of this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of bookshelves belonging to the authenticated user.

*Tags:* `mylibrary`

#### Input Parameters
* `source` - _optional_ - String to identify the originator of this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves metadata for a specific bookshelf belonging to the authenticated user.

*Tags:* `mylibrary`

#### Input Parameters
* `shelf` - _required_ - ID of bookshelf to retrieve.
* `source` - _optional_ - String to identify the originator of this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Adds a volume to a bookshelf.

*Tags:* `mylibrary`

#### Input Parameters
* `reason` - _optional_ - The reason for which the book is added to the library.
    Possible values: IOS_PREX, IOS_SEARCH, ONBOARDING.
* `shelf` - _required_ - ID of bookshelf to which to add a volume.
* `source` - _optional_ - String to identify the originator of this request.
* `volumeId` - _required_ - ID of volume to add.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Clears all volumes from a bookshelf.

*Tags:* `mylibrary`

#### Input Parameters
* `shelf` - _required_ - ID of bookshelf from which to remove a volume.
* `source` - _optional_ - String to identify the originator of this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Moves a volume within a bookshelf.

*Tags:* `mylibrary`

#### Input Parameters
* `shelf` - _required_ - ID of bookshelf with the volume.
* `source` - _optional_ - String to identify the originator of this request.
* `volumeId` - _required_ - ID of volume to move.
* `volumePosition` - _required_ - Position on shelf to move the item (0 puts the item before the current first item, 1 puts it between the first and the second and so on.)
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Removes a volume from a bookshelf.

*Tags:* `mylibrary`

#### Input Parameters
* `reason` - _optional_ - The reason for which the book is removed from the library.
    Possible values: ONBOARDING.
* `shelf` - _required_ - ID of bookshelf from which to remove a volume.
* `source` - _optional_ - String to identify the originator of this request.
* `volumeId` - _required_ - ID of volume to remove.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets volume information for volumes on a bookshelf.

*Tags:* `mylibrary`

#### Input Parameters
* `country` - _optional_ - ISO-3166-1 code to override the IP-based location.
* `maxResults` - _optional_ - Maximum number of results to return
* `projection` - _optional_ - Restrict information returned to a set of selected fields.
    Possible values: full, lite.
* `q` - _optional_ - Full-text search query string in this bookshelf.
* `shelf` - _required_ - The bookshelf ID or name retrieve volumes for.
* `showPreorders` - _optional_ - Set to true to show pre-ordered books. Defaults to false.
* `source` - _optional_ - String to identify the originator of this request.
* `startIndex` - _optional_ - Index of the first element to return (starts at 0)

### Retrieves my reading position information for a volume.

*Tags:* `mylibrary`

#### Input Parameters
* `contentVersion` - _optional_ - Volume content version for which this reading position is requested.
* `source` - _optional_ - String to identify the originator of this request.
* `volumeId` - _required_ - ID of volume for which to retrieve a reading position.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Sets my reading position information for a volume.

*Tags:* `mylibrary`

#### Input Parameters
* `action` - _optional_ - Action that caused this reading position to be set.
    Possible values: bookmark, chapter, next-page, prev-page, scroll, search.
* `contentVersion` - _optional_ - Volume content version for which this reading position applies.
* `deviceCookie` - _optional_ - Random persistent device cookie optional on set position.
* `position` - _required_ - Position string for the new volume reading position.
* `source` - _optional_ - String to identify the originator of this request.
* `timestamp` - _required_ - RFC 3339 UTC format timestamp associated with this reading position.
* `volumeId` - _required_ - ID of volume for which to update the reading position.

### Returns notification details for a given notification id.

*Tags:* `notification`

#### Input Parameters
* `locale` - _optional_ - ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating notification title and body.
* `notification_id` - _required_ - String to identify the notification.
* `source` - _optional_ - String to identify the originator of this request.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### List categories for onboarding experience.

*Tags:* `onboarding`

#### Input Parameters
* `locale` - _optional_ - ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### List available volumes under categories for onboarding experience.

*Tags:* `onboarding`

#### Input Parameters
* `categoryId` - _optional_ - List of category ids requested.
* `locale` - _optional_ - ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset.
* `maxAllowedMaturityRating` - _optional_ - The maximum allowed maturity rating of returned volumes. Books with a higher maturity rating are filtered out.
    Possible values: mature, not-mature.
* `pageSize` - _optional_ - Number of maximum results per page to be included in the response.
* `pageToken` - _optional_ - The value of the nextToken from the previous page.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Returns a stream of personalized book clusters

*Tags:* `personalizedstream`

#### Input Parameters
* `locale` - _optional_ - ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
* `maxAllowedMaturityRating` - _optional_ - The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
    Possible values: mature, not-mature.
* `source` - _optional_ - String to identify the originator of this request.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### books_promooffer_accept

*Tags:* `promooffer`

#### Input Parameters
* `androidId` - _optional_ - device android_id
* `device` - _optional_ - device device
* `manufacturer` - _optional_ - device manufacturer
* `model` - _optional_ - device model
* `offerId` - _optional_
* `product` - _optional_ - device product
* `serial` - _optional_ - device serial
* `volumeId` - _optional_ - Volume id to exercise the offer

### books_promooffer_dismiss

*Tags:* `promooffer`

#### Input Parameters
* `androidId` - _optional_ - device android_id
* `device` - _optional_ - device device
* `manufacturer` - _optional_ - device manufacturer
* `model` - _optional_ - device model
* `offerId` - _optional_ - Offer to dimiss
* `product` - _optional_ - device product
* `serial` - _optional_ - device serial

### Returns a list of promo offers available to the user

*Tags:* `promooffer`

#### Input Parameters
* `androidId` - _optional_ - device android_id
* `device` - _optional_ - device device
* `manufacturer` - _optional_ - device manufacturer
* `model` - _optional_ - device model
* `product` - _optional_ - device product
* `serial` - _optional_ - device serial
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Returns Series metadata for the given series ids.

*Tags:* `series`

#### Input Parameters
* `series_id` - _required_ - String that identifies the series
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Returns Series membership data given the series id.

*Tags:* `series`

#### Input Parameters
* `page_size` - _optional_ - Number of maximum results per page to be included in the response.
* `page_token` - _optional_ - The value of the nextToken from the previous page.
* `series_id` - _required_ - String that identifies the series
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of public bookshelves for the specified user.

*Tags:* `bookshelves`

#### Input Parameters
* `source` - _optional_ - String to identify the originator of this request.
* `userId` - _required_ - ID of user for whom to retrieve bookshelves.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves metadata for a specific bookshelf for the specified user.

*Tags:* `bookshelves`

#### Input Parameters
* `shelf` - _required_ - ID of bookshelf to retrieve.
* `source` - _optional_ - String to identify the originator of this request.
* `userId` - _required_ - ID of user for whom to retrieve bookshelves.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves volumes in a specific bookshelf for the specified user.

*Tags:* `bookshelves`

#### Input Parameters
* `maxResults` - _optional_ - Maximum number of results to return
* `shelf` - _required_ - ID of bookshelf to retrieve volumes.
* `showPreorders` - _optional_ - Set to true to show pre-ordered books. Defaults to false.
* `source` - _optional_ - String to identify the originator of this request.
* `startIndex` - _optional_ - Index of the first element to return (starts at 0)
* `userId` - _required_ - ID of user for whom to retrieve bookshelf volumes.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Performs a book search.

*Tags:* `volumes`

#### Input Parameters
* `download` - _optional_ - Restrict to volumes by download availability.
    Possible values: epub.
* `filter` - _optional_ - Filter search results.
    Possible values: ebooks, free-ebooks, full, paid-ebooks, partial.
* `langRestrict` - _optional_ - Restrict results to books with this language code.
* `libraryRestrict` - _optional_ - Restrict search to this user's library.
    Possible values: my-library, no-restrict.
* `maxAllowedMaturityRating` - _optional_ - The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
    Possible values: mature, not-mature.
* `maxResults` - _optional_ - Maximum number of results to return.
* `orderBy` - _optional_ - Sort search results.
    Possible values: newest, relevance.
* `partner` - _optional_ - Restrict and brand results for partner ID.
* `printType` - _optional_ - Restrict to books or magazines.
    Possible values: all, books, magazines.
* `projection` - _optional_ - Restrict information returned to a set of selected fields.
    Possible values: full, lite.
* `q` - _required_ - Full-text search query string.
* `showPreorders` - _optional_ - Set to true to show books available for preorder. Defaults to false.
* `source` - _optional_ - String to identify the originator of this request.
* `startIndex` - _optional_ - Index of the first result to return (starts at 0)

### Return a list of books in My Library.

*Tags:* `volumes`

#### Input Parameters
* `acquireMethod` - _optional_ - How the book was acquired
* `country` - _optional_ - ISO-3166-1 code to override the IP-based location.
* `locale` - _optional_ - ISO-639-1 language and ISO-3166-1 country code. Ex:'en_US'. Used for generating recommendations.
* `maxResults` - _optional_ - Maximum number of results to return.
* `processingState` - _optional_ - The processing state of the user uploaded volumes to be returned. Applicable only if the UPLOADED is specified in the acquireMethod.
* `source` - _optional_ - String to identify the originator of this request.
* `startIndex` - _optional_ - Index of the first result to return (starts at 0)

### Return a list of recommended books for the current user.

*Tags:* `volumes`

#### Input Parameters
* `locale` - _optional_ - ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
* `maxAllowedMaturityRating` - _optional_ - The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
    Possible values: mature, not-mature.
* `source` - _optional_ - String to identify the originator of this request.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Rate a recommended book for the current user.

*Tags:* `volumes`

#### Input Parameters
* `locale` - _optional_ - ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
* `rating` - _required_ - Rating to be given to the volume.
    Possible values: HAVE_IT, NOT_INTERESTED.
* `source` - _optional_ - String to identify the originator of this request.
* `volumeId` - _required_ - ID of the source volume.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Return a list of books uploaded by the current user.

*Tags:* `volumes`

#### Input Parameters
* `locale` - _optional_ - ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
* `maxResults` - _optional_ - Maximum number of results to return.
* `processingState` - _optional_ - The processing state of the user uploaded volumes to be returned.
* `source` - _optional_ - String to identify the originator of this request.
* `startIndex` - _optional_ - Index of the first result to return (starts at 0)
* `volumeId` - _optional_ - The ids of the volumes to be returned. If not specified all that match the processingState are returned.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets volume information for a single volume.

*Tags:* `volumes`

#### Input Parameters
* `country` - _optional_ - ISO-3166-1 code to override the IP-based location.
* `includeNonComicsSeries` - _optional_ - Set to true to include non-comics series. Defaults to false.
* `partner` - _optional_ - Brand results for partner ID.
* `projection` - _optional_ - Restrict information returned to a set of selected fields.
    Possible values: full, lite.
* `source` - _optional_ - String to identify the originator of this request.
* `user_library_consistent_read` - _optional_
* `volumeId` - _required_ - ID of volume to retrieve.

### Return a list of associated books.

*Tags:* `volumes`

#### Input Parameters
* `association` - _optional_ - Association type.
    Possible values: end-of-sample, end-of-volume, related-for-play.
* `locale` - _optional_ - ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
* `maxAllowedMaturityRating` - _optional_ - The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
    Possible values: mature, not-mature.
* `source` - _optional_ - String to identify the originator of this request.
* `volumeId` - _required_ - ID of the source volume.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets the volume annotations for a volume and layer.

*Tags:* `layers`

#### Input Parameters
* `contentVersion` - _required_ - The content version for the requested volume.
* `endOffset` - _optional_ - The end offset to end retrieving data from.
* `endPosition` - _optional_ - The end position to end retrieving data from.
* `layerId` - _required_ - The ID for the layer to get the annotations.
* `locale` - _optional_ - The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
* `maxResults` - _optional_ - Maximum number of results to return
* `pageToken` - _optional_ - The value of the nextToken from the previous page.
* `showDeleted` - _optional_ - Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false.
* `source` - _optional_ - String to identify the originator of this request.
* `startOffset` - _optional_ - The start offset to start retrieving data from.
* `startPosition` - _optional_ - The start position to start retrieving data from.
* `updatedMax` - _optional_ - RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
* `updatedMin` - _optional_ - RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
* `volumeAnnotationsVersion` - _optional_ - The version of the volume annotations that you are requesting.
* `volumeId` - _required_ - The volume to retrieve annotations for.

### Gets the volume annotation.

*Tags:* `layers`

#### Input Parameters
* `annotationId` - _required_ - The ID of the volume annotation to retrieve.
* `layerId` - _required_ - The ID for the layer to get the annotations.
* `locale` - _optional_ - The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
* `source` - _optional_ - String to identify the originator of this request.
* `volumeId` - _required_ - The volume to retrieve annotations for.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets the annotation data for a volume and layer.

*Tags:* `layers`

#### Input Parameters
* `annotationDataId` - _optional_ - The list of Annotation Data Ids to retrieve. Pagination is ignored if this is set.
* `contentVersion` - _required_ - The content version for the requested volume.
* `h` - _optional_ - The requested pixel height for any images. If height is provided width must also be provided.
* `layerId` - _required_ - The ID for the layer to get the annotation data.
* `locale` - _optional_ - The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
* `maxResults` - _optional_ - Maximum number of results to return
* `pageToken` - _optional_ - The value of the nextToken from the previous page.
* `scale` - _optional_ - The requested scale for the image.
* `source` - _optional_ - String to identify the originator of this request.
* `updatedMax` - _optional_ - RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
* `updatedMin` - _optional_ - RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
* `volumeId` - _required_ - The volume to retrieve annotation data for.
* `w` - _optional_ - The requested pixel width for any images. If width is provided height must also be provided.

### Gets the annotation data.

*Tags:* `layers`

#### Input Parameters
* `allowWebDefinitions` - _optional_ - For the dictionary layer. Whether or not to allow web definitions.
* `annotationDataId` - _required_ - The ID of the annotation data to retrieve.
* `contentVersion` - _required_ - The content version for the volume you are trying to retrieve.
* `h` - _optional_ - The requested pixel height for any images. If height is provided width must also be provided.
* `layerId` - _required_ - The ID for the layer to get the annotations.
* `locale` - _optional_ - The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
* `scale` - _optional_ - The requested scale for the image.
* `source` - _optional_ - String to identify the originator of this request.
* `volumeId` - _required_ - The volume to retrieve annotations for.
* `w` - _optional_ - The requested pixel width for any images. If width is provided height must also be provided.

### List the layer summaries for a volume.

*Tags:* `layers`

#### Input Parameters
* `contentVersion` - _optional_ - The content version for the requested volume.
* `maxResults` - _optional_ - Maximum number of results to return
* `pageToken` - _optional_ - The value of the nextToken from the previous page.
* `source` - _optional_ - String to identify the originator of this request.
* `volumeId` - _required_ - The volume to retrieve layers for.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets the layer summary for a volume.

*Tags:* `layers`

#### Input Parameters
* `contentVersion` - _optional_ - The content version for the requested volume.
* `source` - _optional_ - String to identify the originator of this request.
* `summaryId` - _required_ - The ID for the layer to get the summary for.
* `volumeId` - _required_ - The volume to retrieve layers for.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

## License

**flow**ground :- Telekom iPaaS / googleapis-com-books-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
