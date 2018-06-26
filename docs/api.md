## Classes

<dl>
<dt><a href="#HolidayAPI">HolidayAPI</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#holidays">holidays()</a> ⇒ <code>Promise</code></dt>
<dd><p>Returns data from the holiday api from a set of parameters</p>
</dd>
</dl>

<a name="HolidayAPI"></a>

## HolidayAPI
**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| this.key | <code>String</code> | API Key for holidayapi.com |
| this.v1 | <code>Object</code> | api methods for v1 |


* [HolidayAPI](#HolidayAPI)
    * [new HolidayAPI()](#new_HolidayAPI_new)
    * [.v1](#HolidayAPI.v1)

<a name="new_HolidayAPI_new"></a>

### new HolidayAPI()
class for querying the holiday api


| Param | Type | Description |
| --- | --- | --- |
| options.key | <code>String</code> | API Key |

<a name="HolidayAPI.v1"></a>

### HolidayAPI.v1
**Kind**: static property of [<code>HolidayAPI</code>](#HolidayAPI)  
<a name="holidays"></a>

## holidays() ⇒ <code>Promise</code>
Returns data from the holiday api from a set of parameters

**Kind**: global function  
**Returns**: <code>Promise</code> - resolves API response data  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters.country] | <code>String</code> |  | Country is required, e.g. US, |
| [parameters.year] | <code>Number</code> |  | Year is required, e.g. 2018 |
| [parameters.month] | <code>Number</code> | <code>7</code> | month of the year |
| [parameters.day] | <code>Number</code> | <code>4</code> | day of the month |
| [parameters.previous] | <code>Boolean</code> | <code>true</code> |  |
| [parameters.upcoming] | <code>Boolean</code> | <code>true</code> |  |
| [parameters.public] | <code>Boolean</code> | <code>true</code> |  |
| [parameters.pretty] | <code>Boolean</code> | <code>true</code> |  |

