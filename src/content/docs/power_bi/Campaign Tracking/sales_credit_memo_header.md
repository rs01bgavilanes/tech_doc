---
title: Sales Credit Memo Header
description: Our most important dataset. Thread carefully.
---

## TMDL

```
createOrReplace

	table returns_fba_inventory
		lineageTag: 2c881e6b-12bd-4151-a19f-e77d6b5be7fd

		column date
			dataType: dateTime
			formatString: Long Date
			lineageTag: 84bc75ad-fc98-4059-9e28-d808a82207ed
			summarizeBy: none
			sourceColumn: date

			variation Variation
				isDefault
				relationship: 20bac98c-8710-4dbf-8569-d23746437c32
				defaultHierarchy: LocalDateTable_92510af2-f56b-4ead-9c50-834b3eafd49b.'Date Hierarchy'

			annotation SummarizationSetBy = Automatic

			annotation UnderlyingDateTimeDataType = Date

		column sku
			dataType: string
			lineageTag: 020ead05-5494-45c0-b1ea-1a465ab8336b
			summarizeBy: none
			sourceColumn: sku

			annotation SummarizationSetBy = Automatic

		column asin
			dataType: string
			lineageTag: ab2db347-9695-4388-8b23-4a64bf886655
			summarizeBy: none
			sourceColumn: asin

			annotation SummarizationSetBy = Automatic

		column condition
			dataType: string
			lineageTag: 0377a226-c27a-490e-b974-8f677bcbf083
			summarizeBy: none
			sourceColumn: condition

			annotation SummarizationSetBy = Automatic

		column your_price
			dataType: double
			lineageTag: 0cdd1876-81fd-4ee5-bf14-ab0736889844
			summarizeBy: sum
			sourceColumn: your_price

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column afn_listing_exists
			dataType: string
			lineageTag: 318ab2ac-caf0-4ea8-9c04-d54d7a49645e
			summarizeBy: none
			sourceColumn: afn_listing_exists

			annotation SummarizationSetBy = Automatic

		partition returns_fba_inventory = m
			mode: import
			source =
					let
					    Source = Odbc.DataSource("dsn=WAP", [HierarchicalNavigation=true]),
					    #"f6d0cde6-3cc6-40dc-bf5a-42e0ed94c6ec_Database" = Source{[Name="f6d0cde6-3cc6-40dc-bf5a-42e0ed94c6ec",Kind="Database"]}[Data],
					    public_Schema = #"f6d0cde6-3cc6-40dc-bf5a-42e0ed94c6ec_Database"{[Name="public",Kind="Schema"]}[Data],
					    returns_fba_inventory_View = public_Schema{[Name="returns_fba_inventory",Kind="View"]}[Data],
					    #"Removed Columns" = Table.RemoveColumns(returns_fba_inventory_View,{"id", "_created_on", "_last_updated_on", "_revision"}),
					    #"Changed Type" = Table.TransformColumnTypes(#"Removed Columns",{{"date", type date}}),
					    #"Removed Columns1" = Table.RemoveColumns(#"Changed Type",{"fnsku", "product_name", "mfn_listing_exists", "mfn_fulfillable_quantity", "afn_warehouse_quantity", "afn_fulfillable_quantity", "afn_unsellable_quantity", "afn_reserved_quantity", "afn_total_quantity", "per_unit_volume", "afn_inbound_working_quantity", "afn_inbound_shipped_quantity", "afn_inbound_receiving_quantity", "_partneruuid", "afn_researching_qty", "afn_reserved_future_supply", "afn_future_supply_buyable"}),
					    #"Filtered Rows" = Table.SelectRows(#"Removed Columns1", each [condition] = "New"),
					    #"Filtered Rows1" = Table.SelectRows(#"Filtered Rows", each [afn_listing_exists] = "1"),
					    #"Filtered Rows2" = Table.SelectRows(#"Filtered Rows1", each Date.IsInCurrentDay([date]))
					in
					    #"Filtered Rows2"

		annotation PBI_ResultType = Table
```
