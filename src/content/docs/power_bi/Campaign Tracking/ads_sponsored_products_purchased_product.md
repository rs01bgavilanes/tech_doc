---
title: ads_sponsored_products_purchased_product
description: Our most important dataset. Thread carefully.
---

## TMDL

```
createOrReplace

	table ads_sponsored_products_purchased_product
		lineageTag: 73952dc5-6394-4f0a-9268-83e54c3a4e80

		column id
			dataType: int64
			formatString: 0
			lineageTag: a3c9ee02-ed26-473a-ba6f-63db7728034f
			summarizeBy: sum
			sourceColumn: id

			annotation SummarizationSetBy = Automatic

		column _created_on
			dataType: dateTime
			formatString: General Date
			lineageTag: 757e28f1-65c3-438d-8d49-b892e939e84c
			summarizeBy: none
			sourceColumn: _created_on

			variation Variation
				isDefault
				relationship: 3d0ecf82-3aa3-4cfa-83f6-805bc9bb7d40
				defaultHierarchy: LocalDateTable_1572e531-b53d-4702-8849-14505d9ac6a9.'Date Hierarchy'

			annotation SummarizationSetBy = Automatic

		column _last_updated_on
			dataType: dateTime
			formatString: General Date
			lineageTag: 3ed683e0-74ab-4629-8725-1a2e68f68e6d
			summarizeBy: none
			sourceColumn: _last_updated_on

			variation Variation
				isDefault
				relationship: 1afdd0ed-3ff1-4164-b9cf-b1e321c3d6e9
				defaultHierarchy: LocalDateTable_462037a1-25d6-4ee5-b767-a3238e215208.'Date Hierarchy'

			annotation SummarizationSetBy = Automatic

		column _revision
			dataType: int64
			formatString: 0
			lineageTag: f3a9f11a-23ae-47b5-ba5c-3668461b6de8
			summarizeBy: sum
			sourceColumn: _revision

			annotation SummarizationSetBy = Automatic

		column _partneruuid
			dataType: string
			lineageTag: 23365e62-32ea-4be4-bfb4-a03aedb0f495
			summarizeBy: none
			sourceColumn: _partneruuid

			annotation SummarizationSetBy = Automatic

		column date
			dataType: dateTime
			formatString: Long Date
			lineageTag: 8b877178-9791-4ecf-b851-697648ada3db
			summarizeBy: none
			sourceColumn: date

			variation Variation
				isDefault
				relationship: 175b5da0-b65f-4051-aa2c-1a89594cc5e9
				defaultHierarchy: LocalDateTable_5578001e-8d10-44d0-95ac-96e121d0bada.'Date Hierarchy'

			annotation SummarizationSetBy = Automatic

			annotation UnderlyingDateTimeDataType = Date

		column portfolio_id
			dataType: string
			lineageTag: 3d7ca382-b76a-4ea0-969f-64e6cf5c5632
			summarizeBy: none
			sourceColumn: portfolio_id

			annotation SummarizationSetBy = Automatic

		column campaign_name
			dataType: string
			lineageTag: ddb58dbb-b0a9-42a2-ae35-9a3919b51508
			summarizeBy: none
			sourceColumn: campaign_name

			annotation SummarizationSetBy = Automatic

		column campaign_id
			dataType: string
			lineageTag: a6542e8a-5af8-45cc-871e-d1c85e25f024
			summarizeBy: none
			sourceColumn: campaign_id

			annotation SummarizationSetBy = Automatic

		column currency
			dataType: string
			lineageTag: dc5adea4-ec6d-4123-b97a-c3b812202697
			summarizeBy: none
			sourceColumn: currency

			annotation SummarizationSetBy = Automatic

		column target_id
			dataType: string
			lineageTag: 98cab28b-682f-40d2-ae0e-0628e528b777
			summarizeBy: none
			sourceColumn: target_id

			annotation SummarizationSetBy = Automatic

		column ad_group_name
			dataType: string
			lineageTag: 41a26945-e938-4f9e-8197-5c2fbeca9eac
			summarizeBy: none
			sourceColumn: ad_group_name

			annotation SummarizationSetBy = Automatic

		column ad_group_id
			dataType: string
			lineageTag: 2f441374-c247-4400-8233-1d6f2aa39803
			summarizeBy: none
			sourceColumn: ad_group_id

			annotation SummarizationSetBy = Automatic

		column keyword_id
			dataType: string
			lineageTag: 6ab751b1-512a-4c25-8228-c9fa91de2263
			summarizeBy: none
			sourceColumn: keyword_id

			annotation SummarizationSetBy = Automatic

		column targeting
			dataType: string
			lineageTag: 1b421f6f-23d1-46b8-8ca4-1e1d2b1173c8
			summarizeBy: none
			sourceColumn: targeting

			annotation SummarizationSetBy = Automatic

		column keyword_type
			dataType: string
			lineageTag: 7ba3e9a9-b848-45b9-a3c3-b15755d6c2e5
			summarizeBy: none
			sourceColumn: keyword_type

			annotation SummarizationSetBy = Automatic

		column match_type
			dataType: string
			lineageTag: 8d374abd-99ce-4225-89e7-ab33fcebeb16
			summarizeBy: none
			sourceColumn: match_type

			annotation SummarizationSetBy = Automatic

		column advertised_asin
			dataType: string
			lineageTag: a7f0ffc5-48f8-4eed-96aa-1f4b5b82bfd1
			summarizeBy: none
			sourceColumn: advertised_asin

			annotation SummarizationSetBy = Automatic

		column advertised_sku
			dataType: string
			lineageTag: 8018d80e-68d8-44ad-b036-fdab72bee682
			summarizeBy: none
			sourceColumn: advertised_sku

			annotation SummarizationSetBy = Automatic

		column purchased_asin
			dataType: string
			lineageTag: 5eca5bf3-1fbe-481a-91cd-e0f6c42bfddc
			summarizeBy: none
			sourceColumn: purchased_asin

			annotation SummarizationSetBy = Automatic

		column 1_day_total_orders
			dataType: int64
			formatString: 0
			lineageTag: f9988d04-c947-45d1-8868-43e80086777d
			summarizeBy: sum
			sourceColumn: 1_day_total_orders

			annotation SummarizationSetBy = Automatic

		column 7_day_total_orders
			dataType: int64
			formatString: 0
			lineageTag: 85f92ef8-7105-4b56-9dec-5e99ed62e44b
			summarizeBy: sum
			sourceColumn: 7_day_total_orders

			annotation SummarizationSetBy = Automatic

		column 14_day_total_orders
			dataType: int64
			formatString: 0
			lineageTag: a83aaede-3940-4ff3-b716-1606952c79e4
			summarizeBy: sum
			sourceColumn: 14_day_total_orders

			annotation SummarizationSetBy = Automatic

		column 30_day_total_orders
			dataType: int64
			formatString: 0
			lineageTag: 129d5028-5105-4b88-a398-8db875130539
			summarizeBy: sum
			sourceColumn: 30_day_total_orders

			annotation SummarizationSetBy = Automatic

		column 1_day_total_sales
			dataType: double
			lineageTag: 2d55fab6-9d57-4482-a0b5-6f46698ec23f
			summarizeBy: sum
			sourceColumn: 1_day_total_sales

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 7_day_total_sales
			dataType: double
			lineageTag: 7f7fdff3-7b96-4b91-9931-1bc9e52e7134
			summarizeBy: sum
			sourceColumn: 7_day_total_sales

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 14_day_total_sales
			dataType: double
			lineageTag: ba61aa40-9e7f-402c-8be8-8a7dc0809eef
			summarizeBy: sum
			sourceColumn: 14_day_total_sales

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 30_day_total_sales
			dataType: double
			lineageTag: 7b8d8dd5-1d57-45b3-95d5-0f1956ed4cee
			summarizeBy: sum
			sourceColumn: 30_day_total_sales

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 1_day_total_units
			dataType: int64
			formatString: 0
			lineageTag: 87dab647-b4a2-4ffe-8cef-d64db653719b
			summarizeBy: sum
			sourceColumn: 1_day_total_units

			annotation SummarizationSetBy = Automatic

		column 7_day_total_units
			dataType: int64
			formatString: 0
			lineageTag: 66fa48b8-fd93-4c00-8903-446002907d9b
			summarizeBy: sum
			sourceColumn: 7_day_total_units

			annotation SummarizationSetBy = Automatic

		column 14_day_total_units
			dataType: int64
			formatString: 0
			lineageTag: 6c8c65ed-353d-4667-b42e-b3bcaeb3953e
			summarizeBy: sum
			sourceColumn: 14_day_total_units

			annotation SummarizationSetBy = Automatic

		column 30_day_total_units
			dataType: int64
			formatString: 0
			lineageTag: 22d0edae-ab90-4202-bd6f-6f865fd392e7
			summarizeBy: sum
			sourceColumn: 30_day_total_units

			annotation SummarizationSetBy = Automatic

		column 1_day_other_sku_orders
			dataType: int64
			formatString: 0
			lineageTag: 58b86409-bb55-4827-b7fe-5db2ad9209f7
			summarizeBy: sum
			sourceColumn: 1_day_other_sku_orders

			annotation SummarizationSetBy = Automatic

		column 7_day_other_sku_orders
			dataType: int64
			formatString: 0
			lineageTag: a6318f22-c539-4197-bc3b-718b7697dadf
			summarizeBy: sum
			sourceColumn: 7_day_other_sku_orders

			annotation SummarizationSetBy = Automatic

		column 14_day_other_sku_orders
			dataType: int64
			formatString: 0
			lineageTag: e7b8adae-3eef-412c-bd63-0bcc83a7c957
			summarizeBy: sum
			sourceColumn: 14_day_other_sku_orders

			annotation SummarizationSetBy = Automatic

		column 30_day_other_sku_orders
			dataType: int64
			formatString: 0
			lineageTag: 35d68559-49ba-4d4b-806c-f3b915668429
			summarizeBy: sum
			sourceColumn: 30_day_other_sku_orders

			annotation SummarizationSetBy = Automatic

		column 1_day_other_sku_sales
			dataType: double
			lineageTag: 61dbd09f-cd4d-46b0-9f60-722746040272
			summarizeBy: sum
			sourceColumn: 1_day_other_sku_sales

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 7_day_other_sku_sales
			dataType: double
			lineageTag: 46d1af6d-03b5-4c44-b3b7-f152b502a14c
			summarizeBy: sum
			sourceColumn: 7_day_other_sku_sales

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 14_day_other_sku_sales
			dataType: double
			lineageTag: 2bb0aa5a-c4ad-40bd-a2a2-d01b65a813d5
			summarizeBy: sum
			sourceColumn: 14_day_other_sku_sales

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 30_day_other_sku_sales
			dataType: double
			lineageTag: 49e8c7bd-246a-4e41-bafe-f5d7384f1326
			summarizeBy: sum
			sourceColumn: 30_day_other_sku_sales

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 1_day_other_sku_units
			dataType: int64
			formatString: 0
			lineageTag: 7521bb59-9b60-4ba5-9508-f0ff109046a6
			summarizeBy: sum
			sourceColumn: 1_day_other_sku_units

			annotation SummarizationSetBy = Automatic

		column 7_day_other_sku_units
			dataType: int64
			formatString: 0
			lineageTag: e72b208f-8926-4876-bd63-769e196e01ee
			summarizeBy: sum
			sourceColumn: 7_day_other_sku_units

			annotation SummarizationSetBy = Automatic

		column 14_day_other_sku_units
			dataType: int64
			formatString: 0
			lineageTag: 6c3f7c40-1ef8-4d29-a931-00a8be609c11
			summarizeBy: sum
			sourceColumn: 14_day_other_sku_units

			annotation SummarizationSetBy = Automatic

		column 30_day_other_sku_units
			dataType: int64
			formatString: 0
			lineageTag: 14185b12-fb64-409a-8095-f06c0b184e36
			summarizeBy: sum
			sourceColumn: 30_day_other_sku_units

			annotation SummarizationSetBy = Automatic

		column kindle_edition_normalized_pages_read_14d
			dataType: int64
			formatString: 0
			lineageTag: f3e2315e-4f34-4279-9bc3-eb0de4bde69a
			summarizeBy: sum
			sourceColumn: kindle_edition_normalized_pages_read_14d

			annotation SummarizationSetBy = Automatic

		column kindle_edition_normalized_pages_royalties_14d
			dataType: int64
			formatString: 0
			lineageTag: 4e6ffadd-6b7c-4ec5-9a40-549a68ef2c6c
			summarizeBy: sum
			sourceColumn: kindle_edition_normalized_pages_royalties_14d

			annotation SummarizationSetBy = Automatic

		column _row_index
			dataType: int64
			formatString: 0
			lineageTag: aaf7097c-cf59-4215-88b8-237262d9324b
			summarizeBy: sum
			sourceColumn: _row_index

			annotation SummarizationSetBy = Automatic

		partition ads_sponsored_products_purchased_product = m
			mode: import
			source =
					let
					    Source = Odbc.DataSource("dsn=WAP", [HierarchicalNavigation=true]),
					    #"f6d0cde6-3cc6-40dc-bf5a-42e0ed94c6ec_Database" = Source{[Name="f6d0cde6-3cc6-40dc-bf5a-42e0ed94c6ec",Kind="Database"]}[Data],
					    public_Schema = #"f6d0cde6-3cc6-40dc-bf5a-42e0ed94c6ec_Database"{[Name="public",Kind="Schema"]}[Data],
					    ads_sponsored_products_purchased_product_View = public_Schema{[Name="ads_sponsored_products_purchased_product",Kind="View"]}[Data],
					    #"Changed Type" = Table.TransformColumnTypes(ads_sponsored_products_purchased_product_View,{{"date", type date}}),
					    #"Filtered Rows" = Table.SelectRows(#"Changed Type", each Date.IsInPreviousNDays([date], 120) or Date.IsInCurrentDay([date]))
					in
					    #"Filtered Rows"

		annotation PBI_NavigationStepName = Navigation

		annotation PBI_ResultType = Table
```
