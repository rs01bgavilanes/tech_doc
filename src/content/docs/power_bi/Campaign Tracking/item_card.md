---
title: Item Card
description: Our most important dataset. Thread carefully.
---

## TMDL

```
createOrReplace

	table Item
		lineageTag: d5ffcaba-0195-464d-91a5-018522bcddc0

		column No_
			dataType: string
			lineageTag: f2460bb0-5c8e-415a-bf76-18c11ff62dfb
			summarizeBy: none
			sourceColumn: No_

			annotation SummarizationSetBy = Automatic

		column 'Unit Price'
			dataType: double
			lineageTag: 03e3424e-1b88-4520-a561-1aee20a4581f
			summarizeBy: none
			sourceColumn: Unit Price

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'Unit Cost'
			dataType: double
			lineageTag: 1cb96c65-7cfc-42af-887f-7a39e4d3b092
			summarizeBy: none
			sourceColumn: Unit Cost

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column ASIN
			dataType: string
			lineageTag: 1eb8d9db-23bf-4464-ad39-e5e6e79c3a40
			summarizeBy: none
			sourceColumn: ASIN

			annotation SummarizationSetBy = Automatic

		column 'Amazon SKU'
			dataType: string
			lineageTag: eb097ad1-7a42-4c19-b047-d4cbf69b15a3
			summarizeBy: none
			sourceColumn: Amazon SKU

			annotation SummarizationSetBy = Automatic

		column SFP = CONCATENATE('Item'[No_]," - SFP")
			lineageTag: 89799460-a29c-4d1e-b6dc-3871db420ddb
			summarizeBy: none

			annotation SummarizationSetBy = Automatic

		partition Item = m
			mode: import
			source =
					let
					    Source = Sql.Databases("rssql01"),
					    RSUAT140 = Source{[Name="RSUAT140"]}[Data],
					    #"dbo_RevolutionSupply$Item" = RSUAT140{[Schema="dbo",Item="RevolutionSupply$Item"]}[Data],
					    #"Removed Columns" = Table.RemoveColumns(#"dbo_RevolutionSupply$Item",{"timestamp", "No_ 2", "Description", "Search Description", "Description 2", "Base Unit of Measure", "Price Unit Conversion", "Type", "Inventory Posting Group", "Shelf No_", "Item Disc_ Group", "Allow Invoice Disc_", "Statistics Group", "Commission Group", "Price_Profit Calculation", "Profit _", "Costing Method", "Standard Cost", "Last Direct Cost", "Indirect Cost _", "Cost is Adjusted", "Allow Online Adjustment", "Vendor No_", "Vendor Item No_", "Lead Time Calculation", "Reorder Point", "Maximum Inventory", "Reorder Quantity", "Alternative Item No_", "Unit List Price", "Duty Due _", "Duty Code", "Gross Weight", "Net Weight", "Units per Parcel", "Unit Volume", "Durability", "Freight Type", "Tariff No_", "Duty Unit Conversion", "Country_Region Purchased Code", "Budget Quantity", "Budgeted Amount", "Budget Profit", "Blocked", "Block Reason", "Last DateTime Modified", "Last Date Modified", "Last Time Modified", "Price Includes VAT", "VAT Bus_ Posting Gr_ (Price)", "Gen_ Prod_ Posting Group", "Picture", "Country_Region of Origin Code", "Automatic Ext_ Texts", "No_ Series", "Tax Group Code", "VAT Prod_ Posting Group", "Reserve", "Global Dimension 1 Code", "Global Dimension 2 Code", "Stockout Warning", "Prevent Negative Inventory", "Application Wksh_ User ID", "Assembly Policy", "GTIN", "Default Deferral Template Code", "Low-Level Code", "Lot Size", "Serial Nos_", "Last Unit Cost Calc_ Date", "Rolled-up Material Cost", "Rolled-up Capacity Cost", "Scrap _", "Inventory Value Zero", "Discrete Order Quantity", "Minimum Order Quantity", "Maximum Order Quantity", "Safety Stock Quantity", "Order Multiple", "Safety Lead Time", "Flushing Method", "Replenishment System", "Rounding Precision", "Sales Unit of Measure", "Purch_ Unit of Measure", "Time Bucket", "Reordering Policy", "Include Inventory", "Manufacturing Policy", "Rescheduling Period", "Lot Accumulation Period", "Dampener Period", "Dampener Quantity", "Overflow Level", "Manufacturer Code", "Item Category Code", "Created From Nonstock Item", "Product Group Code", "Service Item Group", "Item Tracking Code", "Lot Nos_", "Expiration Calculation", "Warehouse Class Code", "Special Equipment Code", "Put-away Template Code", "Put-away Unit of Measure Code", "Phys Invt Counting Period Code", "Last Counting Period Update", "Use Cross-Docking", "Next Counting Start Date", "Next Counting End Date", "Id", "Unit of Measure Id", "Tax Group Id", "Sales Blocked", "Purchasing Blocked", "Item Category Id", "Duty Class", "SAT Item Classification", "Routing No_", "Production BOM No_", "Single-Level Material Cost", "Single-Level Capacity Cost", "Single-Level Subcontrd_ Cost", "Single-Level Cap_ Ovhd Cost", "Single-Level Mfg_ Ovhd Cost", "Overhead Rate", "Rolled-up Subcontracted Cost", "Rolled-up Mfg_ Ovhd Cost", "Rolled-up Cap_ Overhead Cost", "Order Tracking Policy", "Critical", "Common Item No_", "TINX Publish to Webshop", "TINX Webshop Product ID", "Magento Inventory"}),
					    #"Merged Queries" = Table.NestedJoin(#"Removed Columns", {"No_"}, #"Item$16a", {"No_"}, "Item$16a", JoinKind.LeftOuter),
					    #"Expanded Item$16a" = Table.ExpandTableColumn(#"Merged Queries", "Item$16a", {"No_", "Amazon SKU"}, {"Item$16a.No_", "Item$16a.Amazon SKU"}),
					    #"Removed Columns1" = Table.RemoveColumns(#"Expanded Item$16a",{"Item$16a.No_"}),
					    #"Renamed Columns" = Table.RenameColumns(#"Removed Columns1",{{"Item$16a.Amazon SKU", "Amazon SKU"}}),
					    #"Filtered Rows" = Table.SelectRows(#"Renamed Columns", each ([ASIN] <> "") and ([Amazon SKU] <> null)),
					    #"Sorted Rows" = Table.Sort(#"Filtered Rows",{{"No_", Order.Descending}}),
					    #"Filtered Rows1" = Table.SelectRows(#"Sorted Rows", each [No_] <> "871544")
					in
					    #"Filtered Rows1"

		annotation PBI_ResultType = Table

		annotation PBI_NavigationStepName = Navigation
```
