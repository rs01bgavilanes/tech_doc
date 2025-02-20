---
title: Amazon Campaign Manager Table
description: Our most important dataset. Thread carefully.
---

## TMDL

```
createOrReplace

	table 'Amazon Campaign Manager Table'
		lineageTag: f0785ab7-050d-4ccc-b9fa-78ac791af10e

		column Date
			dataType: dateTime
			formatString: Long Date
			lineageTag: 7431ba8b-f624-4336-b18b-89daf79f617a
			summarizeBy: none
			sourceColumn: Date

			variation Variation
				isDefault
				relationship: 1ea6af60-4e21-4528-94ee-d26492bc6485
				defaultHierarchy: LocalDateTable_263e276c-b78d-4e25-9a14-23459a6befad.'Date Hierarchy'

			annotation SummarizationSetBy = Automatic

			annotation UnderlyingDateTimeDataType = Date

		column 'Ad Spend'
			dataType: double
			lineageTag: b14652d9-43e2-405f-9c97-be994ca241a4
			summarizeBy: sum
			sourceColumn: Ad Spend

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		partition 'Amazon Campaign Manager Table' = m
			mode: import
			source =
					let
					    Source = Table.FromRows(Json.Document(Binary.Decompress(Binary.FromText("Tc3JDcRACETRXDhbmGIxEEur809jpLY05voKfdYiv3GrqNNFipTgNtrXovgc3absffwZXiHgeO9zdsqc04/XcA1xNhzvz1urWPQwZHa8/n1gPhY1NnkHHUM2jPOhvX8=", BinaryEncoding.Base64), Compression.Deflate)), let _t = ((type nullable text) meta [Serialized.Text = true]) in type table [Date = _t, #"Ad Spend" = _t]),
					    #"Changed Type" = Table.TransformColumnTypes(Source,{{"Date", type date}, {"Ad Spend", type number}})
					in
					    #"Changed Type"

		annotation PBI_ResultType = Table

		annotation PBI_NavigationStepName = Navigation
```
