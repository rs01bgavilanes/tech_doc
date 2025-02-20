---
title: Item Unit of Measure
description: Our most important dataset. Thread carefully.
---

## TMDL

```
createOrReplace

	table 'Item Card'
		lineageTag: 7051c96b-b119-451f-9bbd-2ee6c8d5658e

		column 'Unit Cost'
			dataType: double
			lineageTag: 7434e720-f266-4eab-8dfa-e543b49533e0
			summarizeBy: sum
			sourceColumn: Unit Cost

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'Unit Price'
			dataType: double
			lineageTag: 88c7588b-a1ee-4900-a9ec-33a7af7dbc62
			summarizeBy: sum
			sourceColumn: Unit Price

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'Bulk Item'
			dataType: boolean
			formatString: """TRUE"";""TRUE"";""FALSE"""
			lineageTag: 688fd736-dc1d-4377-9bf9-e0fb22b83d88
			summarizeBy: none
			sourceColumn: Bulk Item

			annotation SummarizationSetBy = Automatic

		column 'Adjusted Unit Cost' =
				
				var inner_pack=LOOKUPVALUE('Item Unit of Measure'[Qty_ per Unit of Measure],'Item Unit of Measure'[Item No_],'Item Card'[No.])
				RETURN IF('Item Card'[Bulk Item]=TRUE(),inner_pack*'Item Card'[Unit Cost],'Item Card'[Unit Cost])
			lineageTag: 69740879-43b0-417d-b423-2654c0dfc378
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column ASIN = LOOKUPVALUE('Item'[ASIN],'Item'[No_],'Item Card'[No.])
			lineageTag: 242825f9-3c20-4b24-99df-aab16269bf2c
			summarizeBy: none

			annotation SummarizationSetBy = Automatic

		column 'No.'
			dataType: string
			lineageTag: a34c953b-2e49-4d01-85be-04143dc43f29
			summarizeBy: none
			sourceColumn: No.

			annotation SummarizationSetBy = Automatic

		partition 'Item Card' = m
			mode: import
			source =
					let
					    Source = Excel.Workbook(Web.Contents("https://revolutionsupply.sharepoint.com/sites/Customers/Shared%20Documents/General/Dave%20and%20Russ/Acc%20Pricing/Item%20Card%20Update-Jet%20Report.xlsx"), null, true),
					    Item_Table = Source{[Item="Item",Kind="Table"]}[Data],
					    #"Changed Type" = Table.TransformColumnTypes(Item_Table,{{"No.", type text}, {"Default Dimension - Dimension Value Code", Int64.Type}, {"Item Category Code", Int64.Type}, {"Description", type text}, {"Description 2", type text}, {"Search Description", type text}, {"Unit Cost", type number}, {"Indirect Cost %", Int64.Type}, {"Unit Price", type number}, {"Tariff No.", type text}, {"Unit Volume", type number}, {"Bulk Item", type logical}}),
					    #"Removed Columns" = Table.RemoveColumns(#"Changed Type",{"Description", "Description 2", "Search Description", "Indirect Cost %", "Tariff No.", "Unit Volume", "Default Dimension - Dimension Value Code", "Item Category Code"})
					in
					    #"Removed Columns"

		annotation PBI_ResultType = Table

		annotation PBI_NavigationStepName = Navigation
```
