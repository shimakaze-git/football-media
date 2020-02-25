import os
import json

from dotenv import load_dotenv

from algoliasearch.search_client import SearchClient

dotenv_path = os.path.dirname(os.path.abspath(__file__))
dotenv_path += "/../"
dotenv_path += ".env"

load_dotenv(dotenv_path)

# 環境変数
# APPLICATION_ID, ADMIN_API_KEY
APPLICATION_ID = os.environ.get("APPLICATION_ID")
ADMIN_API_KEY = os.environ.get("ADMIN_API_KEY")
INDEX_NAME = os.environ.get("INDEX_NAME")

search_client = SearchClient.create(APPLICATION_ID, ADMIN_API_KEY)
index = search_client.init_index(INDEX_NAME)

with open("media.json") as f:
    records = json.load(f)

index.save_objects(records, {"autoGenerateObjectIDIfNotExist": True})
