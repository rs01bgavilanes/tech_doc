---
title: Calendar
description: Our most important dataset. Thread carefully.
---

## TMDL

```
createOrReplace

	table Calendar
		lineageTag: fc5f19e7-dbfa-4dd8-b3cc-19effc97ffdf
		dataCategory: Time

		measure 'Average Difference' = AVERAGE('Calendar'[Difference Reason to Reason])
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: 4029fbc3-32e4-4f1d-b2ad-459ff2546005

		measure 'Percent Difference' = (abs(SUM('Calendar'[Total Ad Spend Advertised Products])-SUM('Calendar'[Advertising Cost - NAV])))/SUM('Calendar'[Advertising Cost - NAV])
			formatString: 0.00%;-0.00%;0.00%
			lineageTag: 1a6ed49b-7914-4e44-8f78-59c27f0f399d

		measure 'Data from' = ```
				
				    VAR TSO = MAX('Calendar'[Most Recent TSO Data])
				    VAR SIL = MAX('Calendar'[Most Recent Sales Inv Data])
				    VAR SCM = MAX('Calendar'[Most Recent Sales Credit Data])
				    VAR PIL = MAX('Calendar'[Most Recent Purchase Inv Line Data])
				
				RETURN 
				    IF(AND(TSO=TODAY()-1,AND(SIL=TODAY(),AND(SCM>=(TODAY()-7),PIL=TODAY()))),
				        CONCATENATE("All Data Sources are updated as of ",TODAY()),
				        IF(TSO<(TODAY()-1),
				            IF(SIL<TODAY(),
				                IF(SCM<(TODAY()-7),
				                    IF(PIL<TODAY(),
				                        CONCATENATE("Data Updated as of ", TSO+2),
				                    CONCATENATE("Data Updated as of ", PIL)),
				                CONCATENATE("Data Updated as of ",SCM)),
				            CONCATENATE("Data Updated as of ", SIL)),
				        CONCATENATE("Data Updated as of ",TSO)))
				
				
				
				
				
				
				```
			lineageTag: 3f6f1a4f-793e-4a4e-a456-c2cc898a005c

		column Date
			isKey
			formatString: mm/dd/yy
			lineageTag: e33470ab-65df-4081-8fbb-b5b49bb57410
			summarizeBy: none
			isNameInferred
			sourceColumn: [Date]

			annotation SummarizationSetBy = Automatic

			annotation UnderlyingDateTimeDataType = Date

			annotation PBI_FormatHint = {"isDateTimeCustom":true}

		column Month = FORMAT('Calendar'[Date],"MMMM YYYY")
			lineageTag: 6ec14662-958e-4d2a-a752-fd45d82c51bf
			summarizeBy: none

			annotation SummarizationSetBy = Automatic

		column 'Weekly Date' = 'Calendar'[Date]-WEEKDAY('Calendar'[Date],3)
			formatString: mm/dd/yy
			lineageTag: e20fc227-4ab1-4712-a70b-b3217969b169
			summarizeBy: none

			annotation SummarizationSetBy = Automatic

			annotation UnderlyingDateTimeDataType = Date

			annotation PBI_FormatHint = {"isDateTimeCustom":true}

		column 'Month Year' = 'Calendar'[Date]
			formatString: mmmm yyyy
			lineageTag: 4a323295-8a46-4f64-a5c7-812ca3c9ff26
			summarizeBy: none

			annotation SummarizationSetBy = Automatic

			annotation UnderlyingDateTimeDataType = Date

			annotation PBI_FormatHint = {"isDateTimeCustom":true}

		column 'Total Ad Spend Advertised Products' = CALCULATE(SUM(ads_sponsored_products_advertised_product[spend]),FILTER(ads_sponsored_products_advertised_product,ads_sponsored_products_advertised_product[date]='Calendar'[Date]))
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: 6617be06-cdb7-46bc-b030-f973d21aedf1
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Total Ad Spend TSO' = CALCULATE(SUM('Amazon Cost Analysis - TSO'[total]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='Calendar'[Date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[description]="Cost of Advertising"))
			lineageTag: e2b08b2e-d6cf-4329-a130-6d8a11518250
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'Difference Reason to Reason' = 'Calendar'[Total Ad Spend Advertised Products]+'Calendar'[Total Ad Spend TSO]
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: 31ab1680-ee28-44b9-8191-a02cc475e025
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column DATE_ = 'Calendar'[Date]
			formatString: mm/dd/yy
			lineageTag: 897f6def-61a7-4b1e-aaff-eeb79d40897c
			summarizeBy: none

			annotation SummarizationSetBy = Automatic

			annotation UnderlyingDateTimeDataType = Date

			annotation PBI_FormatHint = {"isDateTimeCustom":true}

		column Year = YEAR('Calendar'[Date])
			formatString: 0
			lineageTag: 2dc01717-11de-4487-8447-6b32b688a405
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column Month_ = FORMAT('Calendar'[Date],"MMMM")
			dataType: string
			lineageTag: fb27c34d-b78d-4385-8282-dc9e8e7c967c
			summarizeBy: none
			sortByColumn: 'Month Number'

			annotation SummarizationSetBy = Automatic

		column 'Advertising Cost - NAV' = CALCULATE(SUM('Purchase Invoice Line'[Amount]),FILTER('Purchase Invoice Line','Purchase Invoice Line'[Description]="Amazon - Other Transaction Fees - Advertising"),FILTER('Purchase Invoice Line','Purchase Invoice Line'[Purchase Invoice Header.Posting Date]='Calendar'[Date]))
			lineageTag: d81d118c-55e5-40a5-a3cc-dc3f6cd6a517
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column Difference = 'Calendar'[Total Ad Spend Advertised Products]-'Calendar'[Advertising Cost - NAV]
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: 7bb32fb2-8a4a-4c81-b7fd-0c40b374dfdd
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Most Recent TSO Data' = IF('Calendar'[Date]=LASTDATE('Amazon Cost Analysis - TSO'[date_time]),'Calendar'[Date],BLANK())
			formatString: mm/dd/yy
			lineageTag: bd897e08-ba2f-419b-bb50-b9b85889088d
			summarizeBy: none

			annotation SummarizationSetBy = Automatic

			annotation UnderlyingDateTimeDataType = Date

			annotation PBI_FormatHint = {"isDateTimeCustom":true}

		column 'Most Recent Sales Inv Data' = IF('Calendar'[Date]=LASTDATE('Sales Invoice Line'[Sales Invoice Header.Posting Date]),'Calendar'[Date],BLANK())
			formatString: mm/dd/yy
			lineageTag: 7d55be47-1698-46a1-ae79-38a31164cbed
			summarizeBy: none

			annotation SummarizationSetBy = Automatic

			annotation UnderlyingDateTimeDataType = Date

			annotation PBI_FormatHint = {"isDateTimeCustom":true}

		column 'Most Recent Sales Credit Data' = IF('Calendar'[Date]=LASTDATE('Sales Credit Memo Line'[Sales Credit Memo Header.Posting Date]),'Calendar'[Date],BLANK())
			formatString: mm/dd/yy
			lineageTag: b15772f1-0344-45ca-b02d-4f29d2851f46
			summarizeBy: none

			annotation SummarizationSetBy = Automatic

			annotation UnderlyingDateTimeDataType = Date

			annotation PBI_FormatHint = {"isDateTimeCustom":true}

		column 'Most Recent Purchase Inv Line Data' = IF('Calendar'[Date]=LASTDATE('Purchase Invoice Line'[Purchase Invoice Header.Posting Date]),'Calendar'[Date],BLANK())
			formatString: mm/dd/yy
			lineageTag: 328f7578-1e7c-4f47-a7ee-767fc207392e
			summarizeBy: none

			annotation SummarizationSetBy = Automatic

			annotation UnderlyingDateTimeDataType = Date

			annotation PBI_FormatHint = {"isDateTimeCustom":true}

		column 'New Month' = 'Calendar'[Date]
			formatString: Long Date
			lineageTag: faa720aa-aec7-4114-b857-9c7e8ea230d9
			summarizeBy: none

			annotation SummarizationSetBy = Automatic

			annotation UnderlyingDateTimeDataType = Date

		column 'Month Number' = MONTH('Calendar'[Date])
			formatString: 0
			lineageTag: 790c2fb1-8d3e-4794-ae6c-fecc7808e7f4
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		hierarchy 'Year Hierarchy'
			lineageTag: 701758fd-f6db-4609-9130-6640eb431ac2

			level Year
				lineageTag: 6d4d96ea-8f64-4b9f-9bf6-594deccb199e
				column: Year

			level Month_
				lineageTag: db1c5412-93e0-4994-8f0a-e2c65c55352b
				column: Month_

			level 'Weekly Date'
				lineageTag: c8313378-47e6-462c-b4ec-f31857df6755
				column: 'Weekly Date'

		partition Calendar = calculated
			mode: import
			source = CALENDAR(DATE(2023,7,01),TODAY())

		annotation PBI_Id = 32f6ff0368634678b70c053f8535f11b
```
