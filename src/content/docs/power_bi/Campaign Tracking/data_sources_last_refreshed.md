---
title: Data Sources Last Refreshed
description: Our most important dataset. Thread carefully.
---

## TMDL

```
createOrReplace

	table 'Customer Forecast'
		lineageTag: 30a9d63b-b4b8-4758-a3ce-7eb1ff2e910b

		column 'Entry No_'
			dataType: int64
			formatString: 0
			lineageTag: 3fd86a19-0b08-4f4f-b877-1435362755bd
			summarizeBy: sum
			sourceColumn: Entry No_

			annotation SummarizationSetBy = Automatic

		column 'Customer No_'
			dataType: string
			lineageTag: 186ad643-0c36-41a4-909f-1b66a0e7cd5d
			summarizeBy: none
			sourceColumn: Customer No_

			annotation SummarizationSetBy = Automatic

		column 'Location Code'
			dataType: string
			lineageTag: 96081767-ddda-4f3e-8f77-36583bb57103
			summarizeBy: none
			sourceColumn: Location Code

			annotation SummarizationSetBy = Automatic

		column 'Item No_'
			dataType: string
			lineageTag: 7c381ffa-e1d3-403b-8f2b-1061398f8a21
			summarizeBy: none
			sourceColumn: Item No_

			annotation SummarizationSetBy = Automatic

		column 'Variant Code'
			dataType: string
			lineageTag: c52c0ac4-7be1-4df5-a99f-1aee6191b0c1
			summarizeBy: none
			sourceColumn: Variant Code

			annotation SummarizationSetBy = Automatic

		column 'Starting Date'
			dataType: dateTime
			formatString: Long Date
			lineageTag: e441f566-48f9-4faa-b663-ff7a00365366
			summarizeBy: none
			sourceColumn: Starting Date

			variation Variation
				isDefault
				relationship: 69d6a9ec-c55e-429b-b725-c6c2aac90edc
				defaultHierarchy: LocalDateTable_1bb2eaf7-2836-45f9-b221-16ec3a3333e7.'Date Hierarchy'

			annotation SummarizationSetBy = Automatic

			annotation UnderlyingDateTimeDataType = Date

		column Quantity
			dataType: double
			lineageTag: 18e0f998-aece-4287-bbf1-3d0e359b7135
			summarizeBy: sum
			sourceColumn: Quantity

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column Released
			dataType: int64
			formatString: 0
			lineageTag: edb6faba-4d0c-43f2-b0a0-775ab1235084
			summarizeBy: sum
			sourceColumn: Released

			annotation SummarizationSetBy = Automatic

		column 'User ID'
			dataType: string
			lineageTag: 70fd9973-3d44-4f49-8f83-93be9a8a3955
			summarizeBy: none
			sourceColumn: User ID

			annotation SummarizationSetBy = Automatic

		column 'Date Created'
			dataType: dateTime
			formatString: General Date
			lineageTag: 11e1e646-c750-4108-b8f4-2515296decec
			summarizeBy: none
			sourceColumn: Date Created

			variation Variation
				isDefault
				relationship: 86642613-f7f1-4f51-971c-c88dc05f1a45
				defaultHierarchy: LocalDateTable_a45b6a55-477b-4381-b7cb-85f8bb1664fd.'Date Hierarchy'

			annotation SummarizationSetBy = Automatic

		column 'Time Created'
			dataType: dateTime
			formatString: General Date
			lineageTag: 88053bdb-5e04-4c29-87e3-4d344cdd4cb7
			summarizeBy: none
			sourceColumn: Time Created

			variation Variation
				isDefault
				relationship: 4762fbe5-22de-444e-87dc-575a1b53e4d9
				defaultHierarchy: LocalDateTable_4cb14a7f-254f-4754-98bc-d7887e8cf4f2.'Date Hierarchy'

			annotation SummarizationSetBy = Automatic

		column 'New Entry'
			dataType: int64
			formatString: 0
			lineageTag: df9d93c6-c505-46e8-933a-419b3a6d0828
			summarizeBy: sum
			sourceColumn: New Entry

			annotation SummarizationSetBy = Automatic

		column 'Unusual Demand Adjust'
			dataType: int64
			formatString: 0
			lineageTag: 08a46a83-1190-4bab-8bc2-4aa4e329de22
			summarizeBy: sum
			sourceColumn: Unusual Demand Adjust

			annotation SummarizationSetBy = Automatic

		column 'Unusual Demand Cust_ No_'
			dataType: string
			lineageTag: 14246d2a-8cb1-4c54-9927-e6c3e985f32e
			summarizeBy: none
			sourceColumn: Unusual Demand Cust_ No_

			annotation SummarizationSetBy = Automatic

		partition 'Customer Forecast' = m
			mode: import
			source =
					let
					    Source = Sql.Databases("rssql01"),
					    RSUAT140 = Source{[Name="RSUAT140"]}[Data],
					    #"dbo_RevolutionSupply$LAX DP Forecast Entry$a8c19647-b664-4902-a66a-c9f19da9121e" = RSUAT140{[Schema="dbo",Item="RevolutionSupply$LAX DP Forecast Entry$a8c19647-b664-4902-a66a-c9f19da9121e"]}[Data],
					    #"Filtered Rows" = Table.SelectRows(#"dbo_RevolutionSupply$LAX DP Forecast Entry$a8c19647-b664-4902-a66a-c9f19da9121e", each ([Customer No_] = "10160" or [Customer No_] = "10165")),
					    #"Changed Type" = Table.TransformColumnTypes(#"Filtered Rows",{{"Starting Date", type date}})
					in
					    #"Changed Type"

		annotation PBI_NavigationStepName = Navigation

		annotation PBI_ResultType = Table
```
